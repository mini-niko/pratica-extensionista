# POST /users - Criar Novo Usuário

## Descrição

Cria um novo usuário no sistema com os dados fornecidos.

## Método HTTP

`POST`

## URL

```
http://localhost:3000/api/users
```

## Headers

```
Content-Type: application/json
```

## Body - Parâmetros

| Campo | Tipo   | Obrigatório | Descrição        |
| ----- | ------ | ----------- | ---------------- |
| email | string | Sim         | Email do usuário |
| nome  | string | Sim         | Nome completo    |
| senha | string | Sim         | Senha            |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "novo@example.com",
    "nome": "Maria Santos",
    "senha": "senha123"
  }'
```

## Respostas

### ✅ 201 Created - Sucesso

Retorna o usuário criado com ID gerado.

**Exemplo:**

```json
{
  "id": 2,
  "email": "novo@example.com",
  "nome": "Maria Santos",
  "senha": "senha123"
}
```

**Estrutura do usuário:**

| Campo | Tipo    | Descrição           |
| ----- | ------- | ------------------- |
| id    | integer | ID único do usuário |
| email | string  | Email do usuário    |
| nome  | string  | Nome completo       |
| senha | string  | Senha               |

### ❌ 400 Bad Request - Campos obrigatórios faltando

Quando um ou mais campos obrigatórios não são fornecidos.

**Exemplo:**

```json
{
  "error": "Email, nome e senha são obrigatórios"
}
```

### ❌ 400 Bad Request - Email inválido

Quando o email fornecido não é válido ou já existe.

**Exemplo:**

```json
{
  "error": "Email inválido ou já cadastrado"
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

Erro no servidor ao criar o usuário.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Email deve ser único no sistema
- ID é gerado automaticamente pelo banco de dados
- Senhas devem ser criptografadas antes de serem armazenadas
- Em produção, validar formato de email e força da senha

## Relacionados

- [GET /users](./users-get-all.md) - Listar todos os usuários
- [GET /users/[id]](./users-get-id.md) - Obter usuário por ID
- [PUT /users/[id]](./users-put-id.md) - Atualizar usuário
- [DELETE /users/[id]](./users-delete-id.md) - Deletar usuário
