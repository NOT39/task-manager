# Gerenciador de tarefas

API de gerenciamento de tarefas utilizada para ministrar as aulas de consumo de API na Infinity School.

## Tecnologias utilizadas

- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Como rodar local

1. Suba a instância do postgres utilizando o docker
> docker compose start -d

2. Instale as dependências do projeto
> npm i

3. Rode as migrações do prisma
> npx prisma migrate dev

4. Rode a aplicação
> npm run dev

## Rotas

### Listar tarefas
> GET /tasks?sessionId=String

Resposta
```json
[
  {
    "id": "8419f80d-3710-4097-95c6-7ae63361bc4a",
    "title": "String",
    "description": "String",
    "completed": false,
    "session_id": "String",
    "created_at": "2024-08-02T23:46:39.681Z",
    "updated_at": null
  },
  {
    "id": "99a7a5c0-e7fd-4677-b752-110ed4a219b5",
    "title": "Strinfg",
    "description": "String",
    "completed": false,
    "session_id": "String",
    "created_at": "2024-08-02T23:48:34.098Z",
    "updated_at": null
  }
]
```

### Detalhar tarefa
> GET /tasks/:taskId?sessionId=String
  
Resposta
```json
  {
  	"id": "360b59a8-ea26-4bc5-9971-c67f1c2382a2",
  	"title": "String",
  	"description": "String",
  	"completed": false,
  	"session_id": "String",
  	"created_at": "2024-08-03T12:37:46.210Z",
  	"updated_at": null
  }
```

### Criar tarefa
> POST /tasks?sessionId=String

Requisição
```json
  {
  	"title": "String",
  	"description": "String"
  }
```
  
Resposta
```json
  {
  	"id": "360b59a8-ea26-4bc5-9971-c67f1c2382a2",
  	"title": "String",
  	"description": "String",
  	"completed": false,
  	"session_id": "String",
  	"created_at": "2024-08-03T12:37:46.210Z",
  	"updated_at": null
  }
```

### Editar  tarefa
> PUT /tasks/:taskId?sessionId=String

Requisição
```json
  {
  	"title": "String"
  }
```
  
Resposta
```json
  {
  	"id": "360b59a8-ea26-4bc5-9971-c67f1c2382a2",
  	"title": "String",
  	"description": "String",
  	"completed": false,
  	"session_id": "String",
  	"created_at": "2024-08-03T12:37:46.210Z",
  	"updated_at": null
  }
```

### Deletar tarefa
> DELETE /tasks/:taskId?sessionId=String
  
Resposta

> STATUS 200
