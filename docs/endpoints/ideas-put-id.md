# PUT /ideas/[id] - Atualizar Ideia

## Descrição

Atualiza os dados de uma ideia específica. Todos os campos são opcionais.

## Método HTTP

`PUT`

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

## Body - Parâmetros (opcionais)

| Campo     | Tipo   | Obrigatório | Descrição          |
| --------- | ------ | ----------- | ------------------ |
| titulo    | string | Não         | Título da ideia    |
| descricao | string | Não         | Descrição da ideia |
| conteudo  | string | Não         | Conteúdo detalhado |

## Exemplo de Requisição

```bash
curl -X PUT http://localhost:3000/api/ideas/1 \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "App Web de Educação",
    "descricao": "Plataforma web para ensino",
    "conteudo": "Detalhes atualizados..."
  }'
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna a ideia atualizada com todos os seus dados.

**Exemplo:**

```json
{
  "id": 1,
  "usuario_id": 1,
  "titulo": "App Web de Educação",
  "descricao": "Plataforma web para ensino",
  "conteudo": "Detalhes atualizados..."
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

### ❌ 400 Bad Request - Formato inválido

Quando o body enviado não é um JSON válido.

**Exemplo:**

```json
{
  "error": "JSON inválido no corpo da requisição"
}
```

### ❌ 500 Internal Server Error

Erro no servidor ao atualizar a ideia.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Todos os campos são opcionais - apenas os fornecidos serão atualizados
- ID da ideia e usuario_id não podem ser alterados
- Sem autenticação necessária

## Relacionados

- [GET /ideas](./ideas-get-all.md) - Listar todas as ideias
- [GET /ideas/[id]](./ideas-get-id.md) - Obter ideia por ID
- [POST /ideas](./ideas-post.md) - Criar nova ideia
- [DELETE /ideas/[id]](./ideas-delete-id.md) - Deletar ideia
