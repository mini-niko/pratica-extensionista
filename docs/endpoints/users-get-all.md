# GET /users - Listar Todos os Usuários

## Descrição

Retorna uma lista com todos os usuários cadastrados no sistema.

## Método HTTP

`GET`

## URL

```
http://localhost:3000/api/users
```

## Parâmetros

Nenhum parâmetro obrigatório.

## Headers

```
Content-Type: application/json
```

## Exemplo de Requisição

```bash
curl -X GET http://localhost:3000/api/users
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna um array com todos os usuários.

**Exemplo:**

```json
[
  {
    "id": 1,
    "email": "joao@example.com",
    "nome": "João Silva",
    "senha": "senha.segura@123"
  },
  {
    "id": 2,
    "email": "maria@example.com",
    "nome": "Maria Santos",
    "senha": "senha.segura@123"
  }
]
```

**Estrutura do usuário:**

| Campo | Tipo    | Descrição           |
| ----- | ------- | ------------------- |
| id    | integer | ID único do usuário |
| email | string  | Email do usuário    |
| nome  | string  | Nome completo       |
| senha | string  | Senha (hash)        |

### ❌ 500 Internal Server Error

Erro no servidor ao buscar usuários.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Retorna um array vazio se não houver usuários cadastrados
- Senhas retornadas devem estar em hash por questões de segurança
- Em produção, considere implementar paginação
- Sem autenticação necessária

## Relacionados

- [GET /users?email](./users-get-email.md) - Buscar por email
- [GET /users/[id]](./users-get-id.md) - Obter usuário por ID
- [POST /users](./users-post.md) - Criar novo usuário
- [PUT /users/[id]](./users-put-id.md) - Atualizar usuário
- [DELETE /users/[id]](./users-delete-id.md) - Deletar usuário
