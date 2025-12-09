# PUT /lessons/[id] - Atualizar Aula

## Descrição

Atualiza os dados de uma aula específica. Todos os campos são opcionais.

## Método HTTP

`PUT`

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

## Body - Parâmetros (opcionais)

| Campo     | Tipo   | Obrigatório | Descrição          |
| --------- | ------ | ----------- | ------------------ |
| titulo    | string | Não         | Título da aula     |
| descricao | string | Não         | Descrição da aula  |
| conteudo  | string | Não         | Conteúdo detalhado |

## Exemplo de Requisição

```bash
curl -X PUT http://localhost:3000/api/lessons/1 \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Funções Avançadas",
    "descricao": "Aprenda técnicas avançadas",
    "conteudo": "Conteúdo atualizado..."
  }'
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna a aula atualizada com todos os seus dados.

**Exemplo:**

```json
{
  "id": 1,
  "curso_id": 1,
  "titulo": "Funções Avançadas",
  "descricao": "Aprenda técnicas avançadas",
  "conteudo": "Conteúdo atualizado..."
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

### ❌ 400 Bad Request - Formato inválido

Quando o body enviado não é um JSON válido.

**Exemplo:**

```json
{
  "error": "JSON inválido no corpo da requisição"
}
```

### ❌ 500 Internal Server Error

Erro no servidor ao atualizar a aula.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Todos os campos são opcionais - apenas os fornecidos serão atualizados
- ID da aula e course_id não podem ser alterados
- Sem autenticação necessária

## Relacionados

- [GET /lessons](./lessons-get-all.md) - Listar aulas de um curso
- [GET /lessons/[id]](./lessons-get-id.md) - Obter aula por ID
- [POST /lessons](./lessons-post.md) - Criar nova aula
- [DELETE /lessons/[id]](./lessons-delete-id.md) - Deletar aula
