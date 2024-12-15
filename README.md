
# Projeto Azure Ada

Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) desenvolvida utilizando Azure Function Apps e conectada a um banco de dados Azure SQL Database. 

Ele foi criado com o objetivo de demonstrar como é possível integrar funções serverless com um banco de dados relacional na nuvem.

## Visão Geral

A aplicação é composta por uma API criada com Azure Functions que permite realizar operações CRUD em um banco de dados Azure SQL. As funções são escritas em JavaScript e são acionadas por requisições HTTP.

## Tecnologias Utilizadas

* **Azure Functions:** Permitem a execução de código sem precisar gerenciar a infraestrutura do servidor.

* **Azure SQL Database:** Banco de dados relacional escalável e de alto desempenho na nuvem.

* **Node.js:** Ambiente de execução para JavaScript no lado do servidor.

* **Visual Studio Code:** IDE utilizada para desenvolvimento e depuração.
## Documentação da API

#### Endpoint da aplicação

```http
  https://adaprojetoazure.azurewebsites.net
```

#### Criar produto

```http
  POST {endpoint}/api/products
```
Passar o nome do produto através do _body_ da requisição como no exemplo abaixo:

```body
  {
      "nome": "Abacaxi"
  }
```

**Output:** retorna o id e o nome do produto criado.

#### Listar todos os produtos

```http
  GET {endpoint}/api/products
```

**Output:** retorna o id e o nome do produto buscado.

#### Listar produto pelo ID

```http
  GET {endpoint}/api/products/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do produto que você quer |

**Output:** retorna o id e o nome do produto buscado.

#### Alterar produto

```http
  PUT {endpoint}/api/products/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do produto que você quer |

Passar o nome do produto através do _body_ da requisição como no exemplo abaixo:

```body
  {
      "nome": "Abacaxi"
  }
```

**Output:** retorna o id e o nome do produto alterado.

#### Deletar produto

```http
  DELETE {endpoint}/api/products/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do produto que você quer |

**Output:** retorna o id e o nome do produto deletado.


## Referência

 - [Portal Azure](https://portal.azure.com/)
 - [Criando Function App](https://learn.microsoft.com/pt-br/azure/azure-functions/functions-create-function-app-portal?pivots=programming-language-javascripte)
 - [Criando Azure SQL DB](https://learn.microsoft.com/pt-br/azure/azure-sql/database/single-database-create-quickstart?view=azuresql&tabs=azure-portalt)

