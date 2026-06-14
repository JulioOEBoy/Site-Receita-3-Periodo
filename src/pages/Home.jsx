import RecipeCard from '../components/RecipeCard.jsx'
import { getImageUrl } from '../utils/images.js'

export default function Home({ receitas }) {
  const destaques = receitas.slice(0, 3)
  const imagensInicio = receitas.slice(1, 4)

  return (
    <main>
      <section className="inicio">
        <h1>Bem-vindo ao Mundo das Receitas</h1>
        <p>
          Aqui você encontrará receitas deliciosas para todos os gostos e ocasiões.
          Explore, inspire-se e descubra novos sabores!
        </p>
        <a href="#/receitas" className="botao-inicio">Explore Mais</a>

        <div className="imagens-inicio">
          {imagensInicio.map((receita) => (
            <a key={receita.id} href={`#/receita/${receita.id}`}>
              <img src={getImageUrl(receita.linkFoto)} alt={receita.nome} className="imagem-inicio" />
            </a>
          ))}
        </div>
      </section>

      <section className="secao-video">
        <div className="texto-video">
          <span className="tag-video">Vídeo de culinária</span>
          <h2>Aprenda uma receita enquanto navega</h2>
          <p>
            Assista a um vídeo de culinária e aproveite para se inspirar antes de escolher sua próxima receita.
          </p>
        </div>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/VsVJDzIOQQc?autoplay=1&mute=1&loop=1&playlist=VsVJDzIOQQc&controls=1"
            title="Vídeo de culinária"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="secao-principal">
        <h1>Receitas em Destaque</h1>
        <p>
          Aqui estão algumas receitas populares para você se inspirar e preparar em casa.
        </p>
        <div className="cards-destaques">
          {destaques.map((receita) => (
            <RecipeCard key={receita.id} receita={receita} />
          ))}
        </div>
      </section>

      <section className="secao-principal dicas-home">
        <h1>Dicas Rápidas</h1>
        <p>Quer cozinhar de forma mais prática? Confira algumas dicas que separamos para você:</p>
        <ul>
          <li>Use sempre ingredientes frescos para realçar o sabor.</li>
          <li>Não tenha medo de experimentar temperos novos.</li>
          <li>Planeje suas receitas para otimizar tempo e evitar desperdício.</li>
          <li>Mantenha utensílios sempre limpos e organizados.</li>
        </ul>
      </section>
    </main>
  )
}
