# PUT /courses/[id] - Atualizar Curso

## Descrição

Atualiza os dados de um curso específico. Todos os campos são opcionais.

## Método HTTP

`PUT`

## URL

```
http://localhost:3000/api/courses/{id}
```

## Parâmetros Path

| Parâmetro | Tipo    | Obrigatório | Descrição   |
| --------- | ------- | ----------- | ----------- |
| id        | integer | Sim         | ID do curso |

## Headers

```
Content-Type: application/json
```

## Body - Parâmetros (opcionais)

| Campo     | Tipo   | Obrigatório | Descrição          |
| --------- | ------ | ----------- | ------------------ |
| nome      | string | Não         | Nome do curso      |
| descricao | string | Não         | Descrição do curso |

## Exemplo de Requisição

```bash
curl -X PUT http://localhost:3000/api/courses/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Web Development Avançado",
    "descricao": "Aprenda técnicas avançadas"
  }'
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna o curso atualizado com todos os seus dados.

**Exemplo:**

```json
{
  "id": 1,
  "nome": "Web Development Avançado",
  "descricao": "Aprenda técnicas avançadas"
}
```

**Estrutura do curso:**

| Campo     | Tipo    | Descrição          |
| --------- | ------- | ------------------ |
| id        | integer | ID único do curso  |
| nome      | string  | Nome do curso      |
| descricao | string  | Descrição do curso |

### ❌ 404 Not Found - Curso não encontrado

Quando não existe curso com o ID fornecido.

**Exemplo:**

```json
{
  "error": "Curso não encontrado"
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

Erro no servidor ao atualizar o curso.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Todos os campos são opcionais - apenas os fornecidos serão atualizados
- ID do curso não pode ser alterado
- Sem autenticação necessária

## Relacionados

- [GET /courses](./courses-get-all.md) - Listar todos os cursos
- [GET /courses/[id]](./courses-get-id.md) - Obter curso por ID
- [POST /courses](./courses-post.md) - Criar novo curso
- [DELETE /courses/[id]](./courses-delete-id.md) - Deletar curso
