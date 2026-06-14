import { useMemo } from 'react'
import RecipeCard from '../components/RecipeCard.jsx'

function normalizarTexto(texto) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export default function Recipes({ receitas, pesquisa, setPesquisa }) {
  const receitasFiltradas = useMemo(() => {
    const termo = normalizarTexto(pesquisa.trim())

    if (!termo) {
      return receitas
    }

    return receitas.filter((receita) => normalizarTexto(receita.nome).startsWith(termo))
  }, [pesquisa, receitas])

  return (
    <main>
      <section className="secao-principal">
        <h1>Galeria de Receitas</h1>
        <p>
          Pesquise pelo começo do nome da receita. A busca acontece automaticamente a cada letra digitada.
        </p>

        <div className="area-pesquisa">
          <label htmlFor="pesquisaReceita">Pesquisar receita</label>
          <input
            id="pesquisaReceita"
            type="search"
            value={pesquisa}
            onChange={(event) => setPesquisa(event.target.value)}
            placeholder="Ex: bolo, pizza, pudim..."
          />
          <span>{receitasFiltradas.length} receita(s) encontrada(s)</span>
        </div>
      </section>

      <section className="secao-destaques">
        <h2>Receitas</h2>

        {receitasFiltradas.length > 0 ? (
          <div className="cards-destaques">
            {receitasFiltradas.map((receita) => (
              <RecipeCard key={receita.id} receita={receita} />
            ))}
          </div>
        ) : (
          <div className="mensagem-vazia">
            <h3>Nenhuma receita encontrada</h3>
            <p>Tente pesquisar pelo começo de outro nome.</p>
          </div>
        )}
      </section>
    </main>
  )
}
