import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Recipes from './pages/Recipes.jsx'
import RecipeDetails from './pages/RecipeDetails.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Quiz from './pages/Quiz.jsx'
import receitas from './data/receitas.json'
import { readJson, writeJson } from './utils/storage.js'

const CURRENT_USER_KEY = 'receitas_current_user'

function getCurrentRoute() {
  return window.location.hash.replace('#', '') || '/'
}

export default function App() {
  const [route, setRoute] = useState(getCurrentRoute)
  const [pesquisa, setPesquisa] = useState('')
  const [currentUser, setCurrentUser] = useState(() => readJson(CURRENT_USER_KEY, null))

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getCurrentRoute())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  function navigate(path) {
    window.location.hash = path
  }

  function updateCurrentUser(user) {
    if (user) {
      writeJson(CURRENT_USER_KEY, user)
    } else {
      localStorage.removeItem(CURRENT_USER_KEY)
    }

    setCurrentUser(user)
  }

  const currentPage = useMemo(() => {
    if (route === '/') {
      return <Home receitas={receitas} />
    }

    if (route === '/receitas') {
      return <Recipes receitas={receitas} pesquisa={pesquisa} setPesquisa={setPesquisa} />
    }

    if (route.startsWith('/receita/')) {
      const receitaId = decodeURIComponent(route.replace('/receita/', ''))
      return <RecipeDetails receitas={receitas} receitaId={receitaId} />
    }

    if (route === '/sobre') {
      return <About />
    }

    if (route === '/contato') {
      return <Contact />
    }

    if (route === '/login') {
      return <Login onLogin={updateCurrentUser} navigate={navigate} />
    }

    if (route === '/quiz') {
      return <Quiz currentUser={currentUser} onUpdateUser={updateCurrentUser} navigate={navigate} />
    }

    return <Recipes receitas={receitas} pesquisa={pesquisa} setPesquisa={setPesquisa} />
  }, [route, currentUser, pesquisa])

  return (
    <div className="app">
      <Header
        currentUser={currentUser}
        onLogout={() => updateCurrentUser(null)}
        route={route}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        navigate={navigate}
      />
      {currentPage}
      <Footer />
    </div>
  )
}
