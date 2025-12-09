# DELETE /ideas/[id] - Deletar Ideia

## Descrição

Remove uma ideia específica do sistema.

## Método HTTP

`DELETE`

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
curl -X DELETE http://localhost:3000/api/ideas/1
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna mensagem de confirmação e os dados da ideia deletada.

**Exemplo:**

```json
{
  "message": "Ideia deletada com sucesso",
  "idea": {
    "id": 1,
    "usuario_id": 1,
    "titulo": "Plataforma de Aprendizado",
    "descricao": "Uma plataforma inovadora...",
    "conteudo": "Detalhes da ideia..."
  }
}
```

**Estrutura da resposta:**

| Campo   | Tipo   | Descrição               |
| ------- | ------ | ----------------------- |
| message | string | Mensagem de confirmação |
| idea    | object | Dados da ideia deletada |

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

Erro no servidor ao deletar a ideia.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Ação é irreversível - a ideia e seus dados serão permanentemente removidos
- Em produção, considere implementar soft delete (marcar como deletada ao invés de remover)
- Sem autenticação necessária

## Relacionados

- [GET /ideas](./ideas-get-all.md) - Listar todas as ideias
- [GET /ideas/[id]](./ideas-get-id.md) - Obter ideia por ID
- [POST /ideas](./ideas-post.md) - Criar nova ideia
- [PUT /ideas/[id]](./ideas-put-id.md) - Atualizar ideia
