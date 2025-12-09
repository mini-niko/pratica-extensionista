# Documentação de Endpoints - Laboratório Maker

Bem-vindo à documentação completa da API REST do projeto Laboratório Maker. Esta seção contém documentação detalhada para cada endpoint, incluindo exemplos, parâmetros e todos os possíveis códigos de resposta.

## 📋 Índice de Endpoints

### 👥 Usuários

| Método | Endpoint                                 | Descrição                |
| ------ | ---------------------------------------- | ------------------------ |
| GET    | [/users](./users-get-all.md)             | Listar todos os usuários |
| GET    | [/users?email=...](./users-get-email.md) | Buscar usuário por email |
| GET    | [/users/[id]](./users-get-id.md)         | Obter usuário por ID     |
| POST   | [/users](./users-post.md)                | Criar novo usuário       |
| PUT    | [/users/[id]](./users-put-id.md)         | Atualizar usuário        |
| DELETE | [/users/[id]](./users-delete-id.md)      | Deletar usuário          |

### 📚 Cursos

| Método | Endpoint                                | Descrição              |
| ------ | --------------------------------------- | ---------------------- |
| GET    | [/courses](./courses-get-all.md)        | Listar todos os cursos |
| GET    | [/courses/[id]](./courses-get-id.md)    | Obter curso por ID     |
| POST   | [/courses](./courses-post.md)           | Criar novo curso       |
| PUT    | [/courses/[id]](./courses-put-id.md)    | Atualizar curso        |
| DELETE | [/courses/[id]](./courses-delete-id.md) | Deletar curso          |

### 🎓 Aulas/Lições

| Método | Endpoint                                | Descrição                |
| ------ | --------------------------------------- | ------------------------ |
| GET    | [/lessons](./lessons-get-all.md)        | Listar aulas de um curso |
| GET    | [/lessons/[id]](./lessons-get-id.md)    | Obter aula por ID        |
| POST   | [/lessons](./lessons-post.md)           | Criar nova aula          |
| PUT    | [/lessons/[id]](./lessons-put-id.md)    | Atualizar aula           |
| DELETE | [/lessons/[id]](./lessons-delete-id.md) | Deletar aula             |

### 💡 Ideias

| Método | Endpoint                            | Descrição              |
| ------ | ----------------------------------- | ---------------------- |
| GET    | [/ideas](./ideas-get-all.md)        | Listar todas as ideias |
| GET    | [/ideas/[id]](./ideas-get-id.md)    | Obter ideia por ID     |
| POST   | [/ideas](./ideas-post.md)           | Criar nova ideia       |
| PUT    | [/ideas/[id]](./ideas-put-id.md)    | Atualizar ideia        |
| DELETE | [/ideas/[id]](./ideas-delete-id.md) | Deletar ideia          |

---

## 🚀 Quick Start

### Base URL

```
http://localhost:3000/api
```

### Headers Padrão

```
Content-Type: application/json
```

### Exemplo de Requisição GET

```bash
curl -X GET http://localhost:3000/api/users
```

### Exemplo de Requisição POST

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@example.com",
    "nome": "João Silva",
    "senha": "senha123"
  }'
```

---

## 📊 Códigos de Status HTTP

| Código | Descrição             | Quando Ocorre                                          |
| ------ | --------------------- | ------------------------------------------------------ |
| 200    | OK                    | Requisição bem-sucedida (GET, PUT, DELETE)             |
| 201    | Created               | Recurso criado com sucesso (POST)                      |
| 400    | Bad Request           | Erro na requisição (campos faltando, ID inválido, etc) |
| 404    | Not Found             | Recurso não encontrado                                 |
| 500    | Internal Server Error | Erro no servidor                                       |

---

## 🔄 Estruturas de Dados

### Usuário

```json
{
  "id": 1,
  "email": "usuario@example.com",
  "nome": "João Silva",
  "senha": "hash_ou_senha_plana"
}
```

### Curso

```json
{
  "id": 1,
  "nome": "Introdução à Programação",
  "descricao": "Aprenda os conceitos básicos..."
}
```

### Aula

```json
{
  "id": 1,
  "curso_id": 1,
  "titulo": "Variáveis e Tipos",
  "descricao": "Aprenda sobre variáveis...",
  "conteudo": "Conteúdo da aula..."
}
```

### Ideia

```json
{
  "id": 1,
  "usuario_id": 1,
  "titulo": "Plataforma de Aprendizado",
  "descricao": "Uma plataforma inovadora...",
  "conteudo": "Detalhes da ideia..."
}
```

---

## ⚠️ Tratamento de Erros

Todos os erros seguem este formato padrão:

```json
{
  "error": "Descrição do erro"
}
```

### Exemplos Comuns

**Campos obrigatórios faltando:**

```json
{
  "error": "Email, nome e senha são obrigatórios"
}
```

**Recurso não encontrado:**

```json
{
  "error": "Usuário não encontrado"
}
```

**ID inválido:**

```json
{
  "error": "ID inválido"
}
```

---

## 🔒 Segurança & Boas Práticas

### Desenvolvimento

- ✅ CORS habilitado para todos os domínios (`*`)
- ✅ JSON parsing automático
- ⚠️ Senhas em texto plano (não usar em produção!)
- ⚠️ Sem autenticação implementada

### Produção

- 🔒 Implementar autenticação (JWT, OAuth)
- 🔐 Criptografar senhas com bcrypt ou similar
- 🌐 Usar HTTPS obrigatoriamente
- 📋 Restringir CORS a domínios conhecidos
- 🛡️ Implementar rate limiting
- 📊 Adicionar logging e monitoramento
- ✅ Usar soft delete em vez de hard delete
- 🔍 Validar e sanitizar todas as entradas

---

## 📝 Notas Importantes

- IDs são gerados automaticamente pelo banco de dados
- Campos opcionais em requisições PUT/POST podem ser omitidos
- Em requisições PUT, apenas os campos fornecidos são atualizados
- Deletar um recurso é irreversível (sem soft delete)
- Cada endpoint tem documentação detalhada com exemplos

---

## 🔗 Relacionamentos

```
Usuário
├── Ideias (um usuário pode ter muitas ideias)

Curso
└── Aulas (um curso pode ter muitas aulas)
```

---

**Última atualização:** 09 de Dezembro de 2025

Para mais informações, consulte a documentação específica de cada endpoint nos links acima.
