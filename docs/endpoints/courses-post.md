# POST /courses - Criar Novo Curso

## Descrição

Cria um novo curso no sistema com os dados fornecidos.

## Método HTTP

`POST`

## URL

```
http://localhost:3000/api/courses
```

## Headers

```
Content-Type: application/json
```

## Body - Parâmetros

| Campo     | Tipo   | Obrigatório | Descrição          |
| --------- | ------ | ----------- | ------------------ |
| nome      | string | Sim         | Nome do curso      |
| descricao | string | Não         | Descrição do curso |

## Exemplo de Requisição

```bash
curl -X POST http://localhost:3000/api/courses \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Web Development",
    "descricao": "Aprenda a desenvolver aplicações web"
  }'
```

## Respostas

### ✅ 201 Created - Sucesso

Retorna o curso criado com ID gerado.

**Exemplo:**

```json
{
  "id": 2,
  "nome": "Web Development",
  "descricao": "Aprenda a desenvolver aplicações web"
}
```

**Estrutura do curso:**

| Campo     | Tipo    | Descrição          |
| --------- | ------- | ------------------ |
| id        | integer | ID único do curso  |
| nome      | string  | Nome do curso      |
| descricao | string  | Descrição do curso |

### ❌ 400 Bad Request - Nome obrigatório

Quando o campo nome não é fornecido.

**Exemplo:**

```json
{
  "error": "Nome do curso é obrigatório"
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

Erro no servidor ao criar o curso.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Nome é obrigatório
- Descrição é opcional
- ID é gerado automaticamente pelo banco de dados
- Sem autenticação necessária

## Relacionados

- [GET /courses](./courses-get-all.md) - Listar todos os cursos
- [GET /courses/[id]](./courses-get-id.md) - Obter curso por ID
- [PUT /courses/[id]](./courses-put-id.md) - Atualizar curso
- [DELETE /courses/[id]](./courses-delete-id.md) - Deletar curso
