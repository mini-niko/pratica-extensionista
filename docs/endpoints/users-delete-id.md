# DELETE /users/[id] - Deletar Usuário

## Descrição

Remove um usuário específico do sistema.

## Método HTTP

`DELETE`

## URL

```
http://localhost:3000/api/users/{id}
```

## Parâmetros Path

| Parâmetro | Tipo    | Obrigatório | Descrição     |
| --------- | ------- | ----------- | ------------- |
| id        | integer | Sim         | ID do usuário |

## Headers

```
Content-Type: application/json
```

## Exemplo de Requisição

```bash
curl -X DELETE http://localhost:3000/api/users/1
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna mensagem de confirmação e os dados do usuário deletado.

**Exemplo:**

```json
{
  "message": "Usuário deletado com sucesso",
  "user": {
    "id": 1,
    "email": "joao@example.com",
    "nome": "João Silva",
    "senha": "senha.segura@123"
  }
}
```

**Estrutura da resposta:**

| Campo   | Tipo   | Descrição                 |
| ------- | ------ | ------------------------- |
| message | string | Mensagem de confirmação   |
| user    | object | Dados do usuário deletado |

### ❌ 404 Not Found - Usuário não encontrado

Quando não existe usuário com o ID fornecido.

**Exemplo:**

```json
{
  "error": "Usuário não encontrado"
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

Erro no servidor ao deletar o usuário.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Ação é irreversível - o usuário e seus dados serão permanentemente removidos
- Pode haver restrições de integridade referencial se o usuário tiver dados relacionados
- Em produção, considere implementar soft delete (marcar como deletado ao invés de remover)

## Relacionados

- [GET /users](./users-get-all.md) - Listar todos os usuários
- [GET /users/[id]](./users-get-id.md) - Obter usuário por ID
- [POST /users](./users-post.md) - Criar novo usuário
- [PUT /users/[id]](./users-put-id.md) - Atualizar usuário
