# GET /ideas/[id] - Obter Ideia por ID

## Descrição

Retorna os dados de uma ideia específica usando seu ID.

## Método HTTP

`GET`

## URL

```
http://localhost:3000/api/ideas/{id}
```

## Parâmetros Path

| Parâmetro | Tipo    | Obrigatório | Descrição   |
| --------- | ------- | ----------- | ----------- |
| id        | integer | Sim         | ID da ideia |

## Headers

```
Content-Type: application/json
```

## Exemplo de Requisição

```bash
curl -X GET http://localhost:3000/api/ideas/1
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna os dados da ideia encontrada.

**Exemplo:**

```json
{
  "id": 1,
  "usuario_id": 1,
  "titulo": "Plataforma de Aprendizado",
  "descricao": "Uma plataforma inovadora...",
  "conteudo": "Detalhes da ideia..."
}
```

**Estrutura da ideia:**

| Campo      | Tipo    | Descrição               |
| ---------- | ------- | ----------------------- |
| id         | integer | ID único da ideia       |
| usuario_id | integer | ID do usuário que criou |
| titulo     | string  | Título da ideia         |
| descricao  | string  | Descrição da ideia      |
| conteudo   | string  | Conteúdo detalhado      |

### ❌ 404 Not Found - Ideia não encontrada

Quando não existe ideia com o ID fornecido.

**Exemplo:**

```json
{
  "error": "Ideia não encontrada"
}
```

### ❌ 400 Bad Request - ID inválido

Quando o ID fornecido não é um número inteiro válido.

**Exemplo:**

```json
{
  "error": "ID inválido"
}
```

### ❌ 500 Internal Server Error

Erro no servidor ao buscar a ideia.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- ID deve ser um número inteiro válido
- Retorna 404 se a ideia não existir
- Sem autenticação necessária

## Relacionados

- [GET /ideas](./ideas-get-all.md) - Listar todas as ideias
- [POST /ideas](./ideas-post.md) - Criar nova ideia
- [PUT /ideas/[id]](./ideas-put-id.md) - Atualizar ideia
- [DELETE /ideas/[id]](./ideas-delete-id.md) - Deletar ideia
