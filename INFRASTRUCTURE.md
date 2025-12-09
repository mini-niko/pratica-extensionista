# Configuração da Infraestrutura

## Implementação

A solução foi implantada utilizando uma instância Amazon EC2 como ambiente principal de
hospedagem. A infraestrutura foi planejada para suportar uma aplicação full stack desenvolvida
em Next.js, organizada em contêineres Docker para padronização, isolamento e portabilidade.

### Instância EC2
Foi criada uma instância EC2 rodando Linux (Ubuntu LTS), escolhida por sua
estabilidade, suporte e compatibilidade com o ecossistema Docker. A instância está configurada com acesso via chave SSH.

### Segurança e Rede
Um Security Group foi configurado permitindo apenas:
- Porta 22 (SSH), limitada ao IP da equipe.
- Porta 80 para acesso público à aplicação.
A VPC padrão foi utilizada, com sub-rede pública para facilitar a exposição da aplicação na
internet.

### Docker e Deploy
A instância EC2 recebeu a instalação do Docker Engine.
O projeto em si, foi pensado para ser executado e separado em containers.

O deploy ocorre com as seguintes etapas:

1- `git push` no repositório local para subir as alterações
2- Conexão via SSH no servidor, com o comando abaixo:

```
ssh -i "chave-de-permissao.pem" <usuario>@<IP do servidor>
```

3- Dentro do repositório no servidor:

```
git pull
```

para puxar as alterações realizadas

4- É buildado a imagem Docker da aplicação, com:

```
docker buildx build -t lab-maker .
```

5- É levantado o servidor a partir da imagem, com:

```
docker run -d --name lab-maker --env-file .env -p 80:3000 lab-maker:latest
```

### Estrutura de Arquivos
Os arquivos de configuração da aplicação e docker-compose.yml foram enviados para
a instância via git pull direto do repositório do projeto.

### Execução
Após o build, os contêineres são iniciados em modo daemon.
A aplicação fica disponível via IP público da EC2.

### Observações Operacionais
- Logs são centralizados via Docker.
- Atualizações do app exigem novo build e restart dos contêineres.
