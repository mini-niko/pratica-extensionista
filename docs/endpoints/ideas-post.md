# POST /ideas - Criar Nova Ideia

## Descrição

Cria uma nova ideia no sistema.

## Método HTTP

`POST`

## URL

```
http://localhost:3000/api/ideas
```

## Headers

```
Content-Type: application/json
```

## Body - Parâmetros

| Campo      | Tipo    | Obrigatório | Descrição              |
| ---------- | ------- | ----------- | ---------------------- |
| usuario_id | integer | Sim         | ID do usuário que cria |
| titulo     | string  | Sim         | Título da ideia        |
| descricao  | string  | Não         | Descrição da ideia     |
| conteudo   | string  | Não         | Conteúdo detalhado     |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:3000/api/ideas \
  -H "Content-Type: application/json" \
  -d '{
    "usuario_id": 1,
    "titulo": "App Mobile de Educação",
    "descricao": "Aplicativo para ensino remoto",
    "conteudo": "Descrição detalhada..."
  }'
```

## Respostas

### ✅ 201 Created - Sucesso

Retorna a ideia criada com ID gerado.

**Exemplo:**

```json
{
  "id": 2,
  "usuario_id": 1,
  "titulo": "App Mobile de Educação",
  "descricao": "Aplicativo para ensino remoto",
  "conteudo": "Descrição detalhada..."
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

### ❌ 400 Bad Request - Campos obrigatórios faltando

Quando usuario_id ou titulo não são fornecidos.

**Example:**

```json
{
  "error": "usuario_id e título são obrigatórios"
}
```

### ❌ 400 Bad Request - Usuário não existe

Quando o usuario_id fornecido não corresponde a um usuário existente.

**Exemplo:**

```json
{
  "error": "Usuário não encontrado"
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

Erro no servidor ao criar a ideia.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- usuario_id e titulo são obrigatórios
- descricao e conteudo são opcionais
- ID é gerado automaticamente pelo banco de dados
- Sem autenticação necessária

## Relacionados

- [GET /ideas](./ideas-get-all.md) - Listar todas as ideias
- [GET /ideas/[id]](./ideas-get-id.md) - Obter ideia por ID
- [PUT /ideas/[id]](./ideas-put-id.md) - Atualizar ideia
- [DELETE /ideas/[id]](./ideas-delete-id.md) - Deletar ideia
