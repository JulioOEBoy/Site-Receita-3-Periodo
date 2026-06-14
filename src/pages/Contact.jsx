const baseUrl = import.meta.env.BASE_URL

export default function Contact() {
  return (
    <main className="container-portfolio">
      <section className="inicio_2 contato-card">
        <h1 className="titulo-portfolio">
          <strong className="titulo-destaque">Vamos conversar?</strong>
        </h1>
        <p className="descricao-portfolio">
          Seja para trocar ideias, sugerir novas receitas, falar sobre oportunidades ou apenas dar um <strong>“oi”</strong>, este é o espaço certo.
          Me mande uma mensagem e logo eu retorno.
        </p>

        <div className="links-sociais">
          <h2 className="titulo-sociais">Conecte-se comigo:</h2>

          <a className="botao-social" href="https://www.instagram.com/juulio_c3sar/" target="_blank" rel="noreferrer">
            Instagram
            <img src={`${baseUrl}img/instagram.png`} alt="Ícone do Instagram" className="titulo-social" />
          </a>

          <a className="botao-social" href="https://github.com/JulioOEBoy" target="_blank" rel="noreferrer">
            Github
            <img src={`${baseUrl}img/github.png`} alt="Ícone do Github" className="titulo-social" />
          </a>

          <a className="botao-social" href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-ferreira-pedrini-176ba5271/" target="_blank" rel="noreferrer">
            LinkedIn
            <img src={`${baseUrl}img/linkedin.png`} alt="Ícone do LinkedIn" className="icone-social" />
          </a>

          <a className="botao-social" href="https://mail.google.com/mail/?view=cm&fs=1&to=jcpcgame8@gmail.com" target="_blank" rel="noreferrer">
            Enviar mensagem pelo <strong className="gmail">Gmail</strong>
          </a>
        </div>
      </section>
    </main>
  )
}
