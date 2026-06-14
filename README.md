# Receitas Deliciosas

Site de receitas com página inicial, galeria, busca, detalhes de preparo, área de login, quiz culinário e página de contato.

## Como rodar

No terminal, dentro da pasta do projeto, execute:

```bash
npm install
npm run dev
```

Depois abra o link mostrado no terminal, normalmente:

```bash
http://localhost:5173
```

## Onde ficam as receitas

As receitas ficam em:

```text
src/data/receitas.json
```

As imagens das receitas ficam em:

```text
public/img/receitas/
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
