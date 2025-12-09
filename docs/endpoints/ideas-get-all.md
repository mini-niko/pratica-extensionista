# GET /ideas - Listar Ideias

## Descrição

Retorna uma lista com todas as ideias cadastradas no sistema.

## Método HTTP

`GET`

## URL

```
http://localhost:3000/api/ideas
```

## Parâmetros

Nenhum parâmetro obrigatório.

## Headers

```
Content-Type: application/json
```

## Exemplo de Requisição

```bash
curl -X GET http://localhost:3000/api/ideas
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna um array com todas as ideias.

**Exemplo:**

```json
[
  {
    "id": 1,
    "usuario_id": 1,
    "titulo": "Plataforma de Aprendizado",
    "descricao": "Uma plataforma inovadora...",
    "conteudo": "Detalhes da ideia..."
  },
  {
    "id": 2,
    "usuario_id": 2,
    "titulo": "App Mobile de Educação",
    "descricao": "Aplicativo para ensino remoto",
    "conteudo": "Descrição..."
  }
]
```

**Estrutura da ideia:**

| Campo      | Tipo    | Descrição               |
| ---------- | ------- | ----------------------- |
| id         | integer | ID único da ideia       |
| usuario_id | integer | ID do usuário que criou |
| titulo     | string  | Título da ideia         |
| descricao  | string  | Descrição da ideia      |
| conteudo   | string  | Conteúdo detalhado      |

### ❌ 500 Internal Server Error

Erro no servidor ao buscar ideias.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Retorna um array vazio se não houver ideias cadastradas
- Em produção, considere implementar paginação para grandes volumes
- Sem autenticação necessária

## Relacionados

- [GET /ideas/[id]](./ideas-get-id.md) - Obter ideia por ID
- [POST /ideas](./ideas-post.md) - Criar nova ideia
- [PUT /ideas/[id]](./ideas-put-id.md) - Atualizar ideia
- [DELETE /ideas/[id]](./ideas-delete-id.md) - Deletar ideia
