# Configuração da Infraestrutura

## Implementação

A solução foi implantada utilizando uma instância Amazon EC2 como ambiente principal de
hospedagem. A infraestrutura foi planejada para suportar uma aplicação full stack desenvolvida
em Next.js, organizada em contêineres Docker para padronização, isolamento e portabilidade.

### Instância EC2
Foi criada uma instância EC2 rodando Linux (Amazon Linux 2 ou Ubuntu LTS), escolhida por sua
estabilidade, suporte e compatibilidade com o ecossistema Docker. A instância utiliza
armazenamento EBS e está configurada com acesso via chave SSH.

### Segurança e Rede
Um Security Group foi configurado permitindo apenas:- Porta 22 (SSH), limitada ao IP da equipe.- Porta 80/443 para acesso público à aplicação.
A VPC padrão foi utilizada, com sub-rede pública para facilitar a exposição da aplicação na
internet.

### Docker e Deploy
A instância EC2 recebeu a instalação do Docker Engine e Docker Compose.
A aplicação Next.js foi empacotada em contêineres para:- Serviço web (Next.js)- Backend/API (separado, caso aplicável)- Banco de dados (somente se necessário; em ambiente de produção, recomenda-se RDS)
O deploy ocorre via Compose, facilitando versionamento e reprodutibilidade do ambiente.

### Estrutura de Arquivos
Os arquivos de configuração da aplicação, Dockerfile e docker-compose.yml foram enviados para
a instância via Git pull direto do repositório do projeto.

### Execução
Após o build, os contêineres são iniciados em modo daemon.
A aplicação fica disponível via IP público da EC2.

### Observações Operacionais**

- Logs são centralizados via Docker.
- Atualizações do app exigem novo build e restart dos contêineres.
