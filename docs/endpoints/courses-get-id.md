# GET /courses/[id] - Obter Curso por ID

## Descrição

Retorna os dados de um curso específico usando seu ID.

## Método HTTP

`GET`

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

## Exemplo de Requisição

```bash
curl -X GET http://localhost:3000/api/courses/1
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna os dados do curso encontrado.

**Exemplo:**

```json
{
  "id": 1,
  "nome": "Introdução à Programação",
  "descricao": "Aprenda os conceitos básicos de programação"
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

### ❌ 500 Internal Server Error

Erro no servidor ao buscar o curso.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- ID deve ser um número inteiro válido
- Retorna 404 se o curso não existir
- Sem autenticação necessária

## Relacionados

- [GET /courses](./courses-get-all.md) - Listar todos os cursos
- [POST /courses](./courses-post.md) - Criar novo curso
- [PUT /courses/[id]](./courses-put-id.md) - Atualizar curso
- [DELETE /courses/[id]](./courses-delete-id.md) - Deletar curso
