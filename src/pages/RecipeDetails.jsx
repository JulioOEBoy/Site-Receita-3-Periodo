import { getImageUrl } from '../utils/images.js'

export default function RecipeDetails({ receitas, receitaId }) {
  const receita = receitas.find((item) => item.id === receitaId)

  if (!receita) {
    return (
      <main className="secao-principal">
        <h1>Receita não encontrada</h1>
        <p>A receita procurada não foi encontrada.</p>
        <a className="botao-inicio" href="#/receitas">Voltar para receitas</a>
      </main>
    )
  }

  return (
    <main>
      <section className="inicio_3 detalhe-receita">
        <div className="detalhe-texto">
          <h2 className="titulo">{receita.nome}</h2>
          <h3>Ingredientes</h3>
          <ul>
            {receita.texto1.map((ingrediente) => (
              <li key={ingrediente}>{ingrediente}</li>
            ))}
          </ul>
        </div>

        <img src={getImageUrl(receita.linkFoto)} alt={receita.nome} className="img" />
      </section>

      <section className="conteudo receita-conteudo">
        <h4>Modo de Preparo</h4>
        {receita.texto2.map((passo, index) => (
          <p key={passo}>{index + 1}. {passo}</p>
        ))}

        <h5>Dicas</h5>
        {receita.dicas.map((dica) => (
          <p key={dica}>{dica}</p>
        ))}

        <a href="#/receitas" className="botao-card botao-voltar">Voltar para receitas</a>
      </section>
    </main>
  )
}
