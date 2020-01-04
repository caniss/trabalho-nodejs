# Trabalho NodeJS


Projeto da disciplina DESENVOLVIMENTO WEB/REST COM NODE.

Desenvolvimento de Plataforma de Vendas, com os seguintes modulos
  - Cadastro de cliente/usuário,
  - Cadastro de produto com categoria,
  - Fechamento de pedidos.

## Requisitos

[nodejs](https://nodejs.org/) v12.x LTS
mysql or sqlite3

## Documentação

Toda documentação da API esta baseada no swagger (link abaixo).

http://localhost:3000/documentation

## Desenvolvimento

Definindo a configuração do ambiente `.env`

**sqlite**

```dotenv
DB_NAME="sqlite:trabalho-node.sqlite"
```

**mysql**

Defina as variáveis de ambiente `DB_ *` e altere o `database.config.js` para trabalhar com o mysql.

`.env`

Necessário definir configurações do MySql no arquivo `.env` conforme servidor local.

```dotenv
DB_HOST=""
DB_PORT=""
DB_USERNAME=""
DB_NAME=""
DB_PASSWORD=""
```

`database.config.js`

```js
  development: {
    default: new Sequelize(Env.DB_NAME, Env.DB_USERNAME, Env.DB_PASSWORD, {
      host: Env.DB_HOST,
      port: Env.DB_PORT,
      dialect: 'mysql',
      logging: Env.DEBUG,
      define: {
        freezeTableName: true,
        paranoid: true
      }
    })
  },
```

**Executando o projeto**

```bash
npm run dev
```

## Produção

Realizar a alteração do arquivos `.env` para variáveis de ambiente de produção

```bash
npm start
```
