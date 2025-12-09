# POST /lessons - Criar Nova Aula

## Descrição

Cria uma nova aula em um curso específico.

## Método HTTP

`POST`

## URL

```
http://localhost:3000/api/lessons
```

## Headers

```
Content-Type: application/json
```

## Body - Parâmetros

| Campo     | Tipo    | Obrigatório | Descrição          |
| --------- | ------- | ----------- | ------------------ |
| course_id | integer | Sim         | ID do curso        |
| titulo    | string  | Sim         | Título da aula     |
| descricao | string  | Não         | Descrição da aula  |
| conteudo  | string  | Não         | Conteúdo detalhado |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:3000/api/lessons \
  -H "Content-Type: application/json" \
  -d '{
    "course_id": 1,
    "titulo": "Funções",
    "descricao": "Aprenda sobre funções",
    "conteudo": "Conteúdo detalhado..."
  }'
```

## Respostas

### ✅ 201 Created - Sucesso

Retorna a aula criada com ID gerado.

**Exemplo:**

```json
{
  "id": 2,
  "curso_id": 1,
  "titulo": "Funções",
  "descricao": "Aprenda sobre funções",
  "conteudo": "Conteúdo detalhado..."
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

### ❌ 400 Bad Request - Campos obrigatórios faltando

Quando course_id ou titulo não são fornecidos.

**Exemplo:**

```json
{
  "error": "course_id e título são obrigatórios"
}
```

### ❌ 400 Bad Request - Curso não existe

Quando o course_id fornecido não corresponde a um curso existente.

**Exemplo:**

```json
{
  "error": "Curso não encontrado"
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

Erro no servidor ao criar a aula.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- course_id e titulo são obrigatórios
- descricao e conteudo são opcionais
- ID é gerado automaticamente pelo banco de dados
- Sem autenticação necessária

## Relacionados

- [GET /lessons](./lessons-get-all.md) - Listar aulas de um curso
- [GET /lessons/[id]](./lessons-get-id.md) - Obter aula por ID
- [PUT /lessons/[id]](./lessons-put-id.md) - Atualizar aula
- [DELETE /lessons/[id]](./lessons-delete-id.md) - Deletar aula
