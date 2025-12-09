# GET /lessons - Listar Aulas

## Descrição

Retorna uma lista de aulas. Pode listar todas as aulas de um curso específico ou uma aula específica por ID.

## Método HTTP

`GET`

## URL

```
http://localhost:3000/api/lessons?course_id={course_id}
```

ou

```
http://localhost:3000/api/lessons?lesson_id={lesson_id}
```

## Parâmetros Query

| Parâmetro | Tipo    | Obrigatório | Descrição                     |
| --------- | ------- | ----------- | ----------------------------- |
| course_id | integer | Não\*       | ID do curso para listar aulas |
| lesson_id | integer | Não\*       | ID da aula específica         |

\*Pelo menos um dos parâmetros é obrigatório.

## Headers

```
Content-Type: application/json
```

## Exemplo de Requisição

### Listar aulas de um curso

```bash
curl -X GET "http://localhost:3000/api/lessons?course_id=1"
```

### Obter aula específica

```bash
curl -X GET "http://localhost:3000/api/lessons?lesson_id=1"
```

## Respostas

### ✅ 200 OK - Sucesso (course_id)

Retorna um array com todas as aulas do curso.

**Exemplo:**

```json
[
  {
    "id": 1,
    "curso_id": 1,
    "titulo": "Variáveis e Tipos",
    "descricao": "Aprenda sobre variáveis...",
    "conteudo": "Conteúdo da aula..."
  },
  {
    "id": 2,
    "curso_id": 1,
    "titulo": "Funções",
    "descricao": "Aprenda sobre funções...",
    "conteudo": "Conteúdo da aula..."
  }
]
```

### ✅ 200 OK - Sucesso (lesson_id)

Retorna a aula específica (objeto único, não array).

**Exemplo:**

```json
{
  "id": 1,
  "curso_id": 1,
  "titulo": "Variáveis e Tipos",
  "descricao": "Aprenda sobre variáveis...",
  "conteudo": "Conteúdo da aula..."
}
```

**Estrutura da aula:**

| Campo     | Tipo    | Descrição                  |
| --------- | ------- | -------------------------- |
| id        | integer | ID único da aula           |
| curso_id  | integer | ID do curso relacionado    |
| titulo    | string  | Título da aula             |
| descricao | string  | Descrição da aula          |
| conteudo  | string  | Conteúdo detalhado da aula |

### ❌ 400 Bad Request - Parâmetro obrigatório faltando

Quando nenhum dos parâmetros (course_id ou lesson_id) é fornecido.

**Exemplo:**

```json
{
  "error": "Parâmetro 'course_id' ou 'lesson_id' é obrigatório"
}
```

### ❌ 404 Not Found - Aula não encontrada

Quando não existe aula com o ID fornecido.

**Exemplo:**

```json
{
  "error": "Aula não encontrada"
}
```

### ❌ 500 Internal Server Error

Erro no servidor ao buscar aulas.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Retorna um array vazio se não houver aulas para o curso especificado
- Apenas um dos parâmetros (course_id ou lesson_id) deve ser fornecido
- Sem autenticação necessária

## Relacionados

- [GET /lessons/[id]](./lessons-get-id.md) - Obter aula por ID (via path)
- [POST /lessons](./lessons-post.md) - Criar nova aula
- [PUT /lessons/[id]](./lessons-put-id.md) - Atualizar aula
- [DELETE /lessons/[id]](./lessons-delete-id.md) - Deletar aula
