# DELETE /lessons/[id] - Deletar Aula

## Descrição

Remove uma aula específica do sistema.

## Método HTTP

`DELETE`

## URL

```
http://localhost:3000/api/lessons/{id}
```

## Parâmetros Path

| Parâmetro | Tipo    | Obrigatório | Descrição  |
| --------- | ------- | ----------- | ---------- |
| id        | integer | Sim         | ID da aula |

## Headers

```
Content-Type: application/json
```

## Exemplo de Requisição

```bash
curl -X DELETE http://localhost:3000/api/lessons/1
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna mensagem de confirmação e os dados da aula deletada.

**Exemplo:**

```json
{
  "message": "Aula deletada com sucesso",
  "lesson": {
    "id": 1,
    "curso_id": 1,
    "titulo": "Variáveis e Tipos",
    "descricao": "Aprenda sobre variáveis...",
    "conteudo": "Conteúdo da aula..."
  }
}
```

**Estrutura da resposta:**

| Campo   | Tipo   | Descrição               |
| ------- | ------ | ----------------------- |
| message | string | Mensagem de confirmação |
| lesson  | object | Dados da aula deletada  |

### ❌ 404 Not Found - Aula não encontrada

Quando não existe aula com o ID fornecido.

**Exemplo:**

```json
{
  "error": "Aula não encontrada"
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

Erro no servidor ao deletar a aula.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Ação é irreversível - a aula e seus dados serão permanentemente removidos
- Em produção, considere implementar soft delete (marcar como deletada ao invés de remover)
- Sem autenticação necessária

## Relacionados

- [GET /lessons](./lessons-get-all.md) - Listar aulas de um curso
- [GET /lessons/[id]](./lessons-get-id.md) - Obter aula por ID
- [POST /lessons](./lessons-post.md) - Criar nova aula
- [PUT /lessons/[id]](./lessons-put-id.md) - Atualizar aula
