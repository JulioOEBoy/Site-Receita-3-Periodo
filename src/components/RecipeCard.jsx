import { getImageUrl } from '../utils/images.js'

export default function RecipeCard({ receita }) {
  return (
    <article className="card-receita">
      <img src={getImageUrl(receita.linkFoto)} alt={receita.nome} />
      <h3>{receita.nome}</h3>
      <a href={`#/receita/${receita.id}`} className="botao-card">Ver Receita</a>
    </article>
  )
}
