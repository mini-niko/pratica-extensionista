# GET /courses - Listar Todos os Cursos

## Descrição

Retorna uma lista com todos os cursos cadastrados no sistema.

## Método HTTP

`GET`

## URL

```
http://localhost:3000/api/courses
```

## Parâmetros

Nenhum parâmetro obrigatório.

## Headers

```
Content-Type: application/json
```

## Exemplo de Requisição

```bash
curl -X GET http://localhost:3000/api/courses
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna um array com todos os cursos.

**Exemplo:**

```json
[
  {
    "id": 1,
    "nome": "Introdução à Programação",
    "descricao": "Aprenda os conceitos básicos de programação"
  },
  {
    "id": 2,
    "nome": "Web Development",
    "descricao": "Desenvolva aplicações web modernas"
  }
]
```

**Estrutura do curso:**

| Campo     | Tipo    | Descrição          |
| --------- | ------- | ------------------ |
| id        | integer | ID único do curso  |
| nome      | string  | Nome do curso      |
| descricao | string  | Descrição do curso |

### ❌ 500 Internal Server Error

Erro no servidor ao buscar cursos.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Retorna um array vazio se não houver cursos cadastrados
- Em produção, considere implementar paginação para grandes volumes
- Sem autenticação necessária

## Relacionados

- [GET /courses/[id]](./courses-get-id.md) - Obter curso por ID
- [POST /courses](./courses-post.md) - Criar novo curso
- [PUT /courses/[id]](./courses-put-id.md) - Atualizar curso
- [DELETE /courses/[id]](./courses-delete-id.md) - Deletar curso
