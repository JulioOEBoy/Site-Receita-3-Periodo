# Receitas Deliciosas - React

Site de receitas feito com React + Vite. O projeto possui página inicial, galeria de receitas, busca pelo começo do nome, detalhes de preparo, login local, quiz culinário e página de contato.

## Como rodar localmente

Dentro da pasta do projeto, execute:

```bash
npm install
npm run dev
```

Depois abra o link que aparecer no terminal, normalmente:

```text
http://localhost:5173
```

## Como gerar a versão final

```bash
npm run build
```

Esse comando cria a pasta `dist/`, que é a versão pronta para hospedagem.

## Como hospedar no GitHub Pages

Este projeto já está preparado para GitHub Pages usando GitHub Actions.

Passos:

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste projeto para o repositório.
3. Entre no repositório no GitHub.
4. Vá em **Settings > Pages**.
5. Em **Source**, escolha **GitHub Actions**.
6. Faça um commit/push na branch `main`.
7. O GitHub vai rodar o workflow automaticamente e publicar o site.

O arquivo responsável pela publicação está em:

```text
.github/workflows/deploy.yml
```

## Observações importantes

- A pasta `node_modules/` não deve ser enviada para o GitHub.
- A pasta `dist/` também não precisa ser enviada, porque o GitHub Actions gera essa pasta sozinho.
- As rotas usam `#/`, por exemplo `#/receitas`, para evitar erro 404 no GitHub Pages.
- O `vite.config.js` usa `base: './'`, permitindo que imagens, CSS e JavaScript funcionem mesmo quando o site estiver dentro de um repositório do GitHub Pages.

## Onde ficam as receitas

As receitas ficam em:

```text
src/data/receitas.json
```

As imagens ficam em:

```text
public/img/
```

Modelo de receita:

```json
{
  "id": "nome-da-receita",
  "nome": "Nome da Receita",
  "linkFoto": "img/receitas/nome-da-receita.jpg",
  "texto1": ["Ingrediente 1", "Ingrediente 2"],
  "texto2": ["Passo 1", "Passo 2"],
  "dicas": ["Dica 1", "Dica 2"]
}
```
