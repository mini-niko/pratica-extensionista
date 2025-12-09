# PUT /users/[id] - Atualizar Usuário

## Descrição

Atualiza os dados de um usuário específico. Todos os campos são opcionais.

## Método HTTP

`PUT`

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

## Body - Parâmetros (opcionais)

| Campo | Tipo   | Obrigatório | Descrição        |
| ----- | ------ | ----------- | ---------------- |
| email | string | Não         | Email do usuário |
| nome  | string | Não         | Nome completo    |
| senha | string | Não         | Senha            |

## Exemplo de Requisição

```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva Atualizado",
    "email": "joao.novo@example.com"
  }'
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna o usuário atualizado com todos os seus dados.

**Exemplo:**

```json
{
  "id": 1,
  "email": "joao.novo@example.com",
  "nome": "João Silva Atualizado",
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

### ❌ 400 Bad Request - Email duplicado

Quando o email fornecido já pertence a outro usuário.

**Exemplo:**

```json
{
  "error": "Email já cadastrado"
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

Erro no servidor ao atualizar o usuário.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Todos os campos são opcionais - apenas os fornecidos serão atualizados
- Email deve ser único no sistema
- ID do usuário não pode ser alterado
- Senhas devem ser criptografadas antes de serem armazenadas

## Relacionados

- [GET /users](./users-get-all.md) - Listar todos os usuários
- [GET /users/[id]](./users-get-id.md) - Obter usuário por ID
- [POST /users](./users-post.md) - Criar novo usuário
- [DELETE /users/[id]](./users-delete-id.md) - Deletar usuário
