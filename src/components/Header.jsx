import { getImageUrl } from '../utils/images.js'

function menuClass(route, path) {
  return route === path ? 'link-ativo' : ''
}

export default function Header({ currentUser, onLogout, route, pesquisa, setPesquisa, navigate }) {
  function handleSearchChange(event) {
    const value = event.target.value
    setPesquisa(value)

    if (route !== '/receitas') {
      navigate('/receitas')
    }
  }

  return (
    <header>
      <nav>
        <div className="logo">
          <img className="icone" src={getImageUrl('img/9911195.jpg')} alt="Logo do site" />
          <a className={menuClass(route, '/')} href="#/">Home</a>
        </div>

        <div className="pesquisa-header">
          <input
            type="search"
            value={pesquisa}
            onChange={handleSearchChange}
            placeholder="Buscar receita..."
            aria-label="Buscar receita pelo começo do nome"
          />
        </div>

        <div className="menu">
          <a className={menuClass(route, '/receitas')} href="#/receitas">Receitas</a>
          <a className={menuClass(route, '/quiz')} href="#/quiz">Quiz</a>
          <a className={menuClass(route, '/contato')} href="#/contato">Contato</a>
          <a className={menuClass(route, '/sobre')} href="#/sobre">Sobre</a>

          {currentUser ? (
            <button className="botao-menu" onClick={onLogout} type="button">
              Sair
            </button>
          ) : (
            <a className={menuClass(route, '/login')} href="#/login">Login</a>
          )}
        </div>
      </nav>
    </header>
  )
}
