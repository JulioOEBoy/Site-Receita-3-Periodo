import { useState } from 'react'
import { readJson, writeJson } from '../utils/storage.js'

const USERS_KEY = 'receitas_users'

function getUsers() {
  return readJson(USERS_KEY, [])
}

function saveUsers(users) {
  writeJson(USERS_KEY, users)
}

export default function Login({ onLogin, navigate }) {
  const [isRegistering, setIsRegistering] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')

  function limparFormulario() {
    setNome('')
    setEmail('')
    setSenha('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const users = getUsers()
    const emailNormalizado = email.trim().toLowerCase()

    if (!emailNormalizado || !senha.trim() || (isRegistering && !nome.trim())) {
      setMensagem('Preencha todos os campos obrigatórios.')
      return
    }

    if (isRegistering) {
      const userExists = users.some((user) => user.email === emailNormalizado)

      if (userExists) {
        setMensagem('Esse e-mail já possui cadastro. Faça login para continuar.')
        return
      }

      const newUser = {
        nome: nome.trim(),
        email: emailNormalizado,
        senha: senha.trim(),
        ultimoResultado: null,
      }

      saveUsers([...users, newUser])
      onLogin(newUser)
      limparFormulario()
      navigate('/quiz')
      return
    }

    const foundUser = users.find((user) => user.email === emailNormalizado && user.senha === senha.trim())

    if (!foundUser) {
      setMensagem('Login inválido. Confira o e-mail e a senha ou crie uma conta.')
      return
    }

    onLogin(foundUser)
    limparFormulario()
    navigate('/quiz')
  }

  return (
    <main className="auth-container">
      <section className="auth-card">
        <span className="tag-video">Área do Quiz</span>
        <h1>{isRegistering ? 'Criar cadastro' : 'Entrar na conta'}</h1>
        <p>
          Para acessar o quiz de culinária, primeiro faça login. Caso ainda não tenha conta, crie seu cadastro.
        </p>

        <form onSubmit={handleSubmit} className="form-auth">
          {isRegistering && (
            <label>
              Nome
              <input
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                placeholder="Digite seu nome"
              />
            </label>
          )}

          <label>
            E-mail
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Digite seu e-mail"
            />
          </label>

          <label>
            Senha
            <input
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              placeholder="Digite sua senha"
            />
          </label>

          {mensagem && <p className="mensagem-formulario">{mensagem}</p>}

          <button className="botao-inicio" type="submit">
            {isRegistering ? 'Cadastrar e abrir quiz' : 'Entrar no quiz'}
          </button>
        </form>

        <button
          className="botao-secundario"
          type="button"
          onClick={() => {
            setMensagem('')
            setIsRegistering(!isRegistering)
          }}
        >
          {isRegistering ? 'Já tenho login' : 'Não tenho login, quero criar'}
        </button>
      </section>
    </main>
  )
}
