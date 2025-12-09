# GET /users/[id] - Obter Usuário por ID

## Descrição

Retorna os dados de um usuário específico usando seu ID.

## Método HTTP

`GET`

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
curl -X GET http://localhost:3000/api/users/1
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna os dados do usuário encontrado.

**Exemplo:**

```json
{
  "id": 1,
  "email": "joao@example.com",
  "nome": "João Silva",
  "senha": "senha.segura@123"
}
```

**Estrutura do usuário:**

| Campo | Tipo    | Descrição           |
| ----- | ------- | ------------------- |
| id    | integer | ID único do usuário |
| email | string  | Email do usuário    |
| nome  | string  | Nome completo       |
| senha | string  | Senha (hash)        |

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

Erro no servidor ao buscar o usuário.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- ID deve ser um número inteiro válido
- Retorna 404 se o usuário não existir
- Senhas retornadas devem estar em hash por questões de segurança

## Relacionados

- [GET /users](./users-get-all.md) - Listar todos os usuários
- [GET /users?email](./users-get-email.md) - Buscar por email
- [PUT /users/[id]](./users-put-id.md) - Atualizar usuário
- [DELETE /users/[id]](./users-delete-id.md) - Deletar usuário
