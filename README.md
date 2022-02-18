# CADASTRO DE PESSOAS BACKEND

## SETUP

Instalar [Docker] (https://docs.docker.com/desktop/).

```bash
# Criar container com mysql
$ docker-compose up -d

# Criar tabelas no banco de dados
$ node ace migration:run

# Criar grupos no banco de dados
$ node ace db:seed

# Instalar dependencias
$ npm install

# Levantar servidor
$ npm run dev