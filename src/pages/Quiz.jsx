import { useMemo, useState } from 'react'
import { readJson, writeJson } from '../utils/storage.js'

const USERS_KEY = 'receitas_users'

const perguntas = [
  {
    pergunta: 'Qual ingrediente é a base do brigadeiro tradicional?',
    alternativas: ['Leite condensado', 'Arroz cozido', 'Farinha de mandioca'],
    correta: 'Leite condensado',
  },
  {
    pergunta: 'O que ajuda o bolo a crescer durante o preparo?',
    alternativas: ['Fermento', 'Vinagre puro', 'Gelo'],
    correta: 'Fermento',
  },
  {
    pergunta: 'Na culinária, o que significa deixar o macarrão “al dente”?',
    alternativas: ['Cozido, mas ainda firme', 'Totalmente derretido', 'Cru por completo'],
    correta: 'Cozido, mas ainda firme',
  },
]

function saveUserScore(user, score) {
  const users = readJson(USERS_KEY, [])
  const updatedUser = {
    ...user,
    ultimoResultado: {
      acertos: score,
      total: perguntas.length,
      data: new Date().toLocaleDateString('pt-BR'),
    },
  }

  const updatedUsers = users.map((savedUser) => (
    savedUser.email === user.email ? updatedUser : savedUser
  ))

  writeJson(USERS_KEY, updatedUsers)
  return updatedUser
}

export default function Quiz({ currentUser, onUpdateUser, navigate }) {
  const [respostas, setRespostas] = useState({})
  const [resultado, setResultado] = useState(null)

  const todasRespondidas = useMemo(() => {
    return perguntas.every((_, index) => respostas[index])
  }, [respostas])

  if (!currentUser) {
    return (
      <main className="auth-container">
        <section className="auth-card">
          <span className="tag-video">Acesso protegido</span>
          <h1>Faça login para abrir o quiz</h1>
          <p>O quiz só é liberado depois que o login bater com um cadastro salvo.</p>
          <button className="botao-inicio" onClick={() => navigate('/login')} type="button">
            Ir para login/cadastro
          </button>
        </section>
      </main>
    )
  }

  function selecionarResposta(indexPergunta, alternativa) {
    setRespostas((respostasAtuais) => ({
      ...respostasAtuais,
      [indexPergunta]: alternativa,
    }))
  }

  function finalizarQuiz(event) {
    event.preventDefault()

    if (!todasRespondidas) {
      return
    }

    const score = perguntas.reduce((total, pergunta, index) => {
      return respostas[index] === pergunta.correta ? total + 1 : total
    }, 0)

    const updatedUser = saveUserScore(currentUser, score)
    onUpdateUser(updatedUser)
    setResultado(score)
  }

  function refazerQuiz() {
    setRespostas({})
    setResultado(null)
  }

  return (
    <main className="quiz-container">
      <section className="quiz-header">
        <span className="tag-video">Quiz de culinária</span>
        <h1>Teste seus conhecimentos, {currentUser.nome}</h1>
        <p>Responda 3 perguntas simples e veja sua pontuação no final.</p>

        {currentUser.ultimoResultado && (
          <div className="ultimo-resultado">
            Último resultado: {currentUser.ultimoResultado.acertos}/{currentUser.ultimoResultado.total} acertos em {currentUser.ultimoResultado.data}
          </div>
        )}
      </section>

      <form className="quiz-card" onSubmit={finalizarQuiz}>
        {perguntas.map((pergunta, indexPergunta) => (
          <fieldset key={pergunta.pergunta} className="pergunta-card">
            <legend>{indexPergunta + 1}. {pergunta.pergunta}</legend>

            {pergunta.alternativas.map((alternativa) => (
              <label key={alternativa} className="alternativa">
                <input
                  type="radio"
                  name={`pergunta-${indexPergunta}`}
                  value={alternativa}
                  checked={respostas[indexPergunta] === alternativa}
                  onChange={() => selecionarResposta(indexPergunta, alternativa)}
                  disabled={resultado !== null}
                />
                {alternativa}
              </label>
            ))}
          </fieldset>
        ))}

        {resultado === null ? (
          <button className="botao-inicio" type="submit" disabled={!todasRespondidas}>
            Finalizar quiz
          </button>
        ) : (
          <div className="resultado-quiz">
            <h2>Você acertou {resultado} de {perguntas.length} perguntas!</h2>
            <p>
              {resultado === perguntas.length
                ? 'Mandou muito bem! Você está afiado na cozinha.'
                : 'Boa tentativa! Revise as respostas e tente novamente.'}
            </p>
            <button className="botao-inicio" type="button" onClick={refazerQuiz}>
              Refazer quiz
            </button>
          </div>
        )}
      </form>
    </main>
  )
}
