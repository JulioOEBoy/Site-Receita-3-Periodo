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
