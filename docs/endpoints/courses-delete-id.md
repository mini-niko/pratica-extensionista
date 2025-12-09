# DELETE /courses/[id] - Deletar Curso

## Descrição

Remove um curso específico do sistema.

## Método HTTP

`DELETE`

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
curl -X DELETE http://localhost:3000/api/courses/1
```

## Respostas

### ✅ 200 OK - Sucesso

Retorna mensagem de confirmação e os dados do curso deletado.

**Exemplo:**

```json
{
  "message": "Curso deletado com sucesso",
  "course": {
    "id": 1,
    "nome": "Introdução à Programação",
    "descricao": "Aprenda os conceitos básicos de programação"
  }
}
```

**Estrutura da resposta:**

| Campo   | Tipo   | Descrição               |
| ------- | ------ | ----------------------- |
| message | string | Mensagem de confirmação |
| course  | object | Dados do curso deletado |

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

Erro no servidor ao deletar o curso.

**Exemplo:**

```json
{
  "error": "Erro ao conectar ao banco de dados"
}
```

## Notas

- Ação é irreversível - o curso e seus dados serão permanentemente removidos
- Pode haver restrições de integridade referencial se o curso tiver aulas associadas
- Em produção, considere implementar soft delete (marcar como deletado ao invés de remover)
- Sem autenticação necessária

## Relacionados

- [GET /courses](./courses-get-all.md) - Listar todos os cursos
- [GET /courses/[id]](./courses-get-id.md) - Obter curso por ID
- [POST /courses](./courses-post.md) - Criar novo curso
- [PUT /courses/[id]](./courses-put-id.md) - Atualizar curso
