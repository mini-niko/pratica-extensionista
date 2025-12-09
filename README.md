# Laboratório Maker

Caso queira acessar o projeto, [clique aqui](https://laboratorio-maker-ruddy.vercel.app/) para acessar o projeto público.

## Participantes

Este projeto foi desenvolvido pelos alunos:

    Maurício Xavier de Oliveira
    Guilherme Henrique Cauvilla
    Felipe Luiz Cieslick
    Gabriel Mazochi

## Infraestrutura

Para saber como o projeto roda em produção, [clique aqui](INFRASTRUCTURE.md)

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

- Node (22+) e NPM;
- Docker e Docker Compose;
- Git.

Após clonar o repositório, instale as dependências com:

    npm install

### Execução

Para iniciar o projeto, rode:

    npm run dev

Isso irá:

- Subir o container Docker do banco de dados;
- Rodar as migrações do banco de dados;
- Inicializar o servidor;

OBS: dentro do arquivo `package.json` tem em detalhes quais scripts rodam para inicializar o projeto.

## Documentação

Dentro da pasta `docs/`, terá as documentações do projeto e apresentação:

    docs/
      ├── apresentacao.pptx
      ├── parte-1
      │     └── (diagramas da entrega parcial)
      ├── parte-2
      │     └── (diagramas da entrega final)
      └── endpoints
            ├── README.md
            └── (arquivos Markdown com a documentação dos enpoints)
