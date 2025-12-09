# GET /lessons/[id] - Obter Aula por ID

## Descrição

Retorna os dados de uma aula específica usando seu ID via path parameter.

## Método HTTP

`GET`

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
curl -X GET http://localhost:3000/api/lessons/1
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna os dados da aula encontrada.

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

Erro no servidor ao buscar a aula.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- ID deve ser um número inteiro válido
- Retorna 404 se a aula não existir
- Sem autenticação necessária

## Relacionados

- [GET /lessons](./lessons-get-all.md) - Listar aulas de um curso
- [POST /lessons](./lessons-post.md) - Criar nova aula
- [PUT /lessons/[id]](./lessons-put-id.md) - Atualizar aula
- [DELETE /lessons/[id]](./lessons-delete-id.md) - Deletar aula
