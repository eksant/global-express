<h1 align="center">Global Express CLI</h1>

<p align="center">
  The official CLI of global-express
</p>
<br>

[![npm][npm]][npm-url]
[![Build Status][build-status]][build-status-url]
[![deps][deps]][deps-url]
[![Downloads][downloads]][downloads-url]
[![GitHub contributors][contributors]][contributors-url]
[![Issue resolution][issue-resolution]][issue-resolution-url]
[![GitHub][license]][license-url]

## About

A Command line interface for instantly building an express server.  
Global Express using different strategies :

- Scaling on a single machine, the common concept is to have multiple processes running on the same port.
- Create models, graphql (resolvers and schema), rest-api (controllers, routes and services) and doc-api (swagger) in matter of seconds.
- Server configuration which includes port, host, http/https, page limit, rate limit suspend time and max hit per IP.

## How to install

Install it once globally:

```
$ npm install -g global-express
```

## Packages

Global Express using multi-package repository like as:

- [Express](https://www.npmjs.com/package/express)
- [Body Parser](https://www.npmjs.com/package/body-parser)
- [Cors](https://www.npmjs.com/package/cors)
- [Debug](https://www.npmjs.com/package/debug)
- [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit)
- [Helmet](https://www.npmjs.com/package/helmet)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Multer](https://www.npmjs.com/package/multer)
- [Rest API](https://restfulapi.net/)
- [GraphQL](https://graphql.org/code/#javascript)
- [Apollo-Graphql](https://www.apollographql.com/docs/)
- [Swagger](https://swagger.io/)

## Commands CLI

```
# Output global express version
$ global-express -V or global-express --version

# Output global exprer helper command
$ global-express -h or global-express --help

# Initializes the global express with current or new directory
$ global-express init or global-express i

# Initializes the global express with new directory
$ global-express init <directory> or global-express i <directory>

# Delete directory the global express
$ global-express clean <directory> or global-express c <directory>
```

## Example Usage

```
# Make directory my-server
$ mkdir my-server

# Change directory to my-server
$ cd my-server

# Initializes the global express
$ global-express init
```

### Directory structure

```
my-server
├── ...
├── apidoc                # Static HTML for API documentation
├── config                # Configuration database oracle dan doc api
├── docs                  # The screnshoot, doc api and json format import insomnia
├── grapqh                # Directory a query language for API
├   ├── resovers          # Containing files for the resolver
├   └── schema            # Schema models
├── logs                  # Log files
├── models                # Structure of tables and properties
├── restapi               # Directory a rest language for API
├   ├── controllers       # Containing class files for the controllers
├   ├── routes            # Containing routes API
├   └── services          # Containing class files for the service controllers
├── server                # Starter module express
└── utils                 # Files that are provided application
```

### Install all the needed dependencies

```
# Install all dependecies
$ npm install or yarn install
```

_Note: when running all of the further commands, please stay in the my-server directory_

## Contributing and Internal Documentation

The global express family welcomes any contributor, small or big. We are happy to elaborate, guide you through the source code and find issues you might want to work on! To get started have a look at our [documentation on contributing](./.github/CONTRIBUTING.md).

## Notes

**Note:** The experience this CLI provides does not work as smooth in Git Bash terminal, since it is not an interactive terminal, but if you are using Git Bash inside VS Code, then there are no problems, I found no complications using any other terminal.

Feel free to post issues if you run into any.

[npm]: https://img.shields.io/npm/v/global-express.svg
[npm-url]: https://www.npmjs.com/package/global-express
[build-status]: https://circleci.com/gh/eksant/global-express/tree/master.svg?style=shield
[build-status-url]: https://circleci.com/gh/eksant/global-express/tree/master
[deps]: https://img.shields.io/david/eksant/global-express.svg
[deps-url]: https://img.shields.io/david/dev/eksant/global-express
[downloads]: https://img.shields.io/npm/dw/global-express.svg
[downloads-url]: https://www.npmjs.com/package/global-express
[contributors]: https://img.shields.io/github/contributors/eksant/global-express.svg
[contributors-url]: https://github.com/eksant/global-express/graphs/contributors
[issue-resolution]: https://isitmaintained.com/badge/resolution/eksant/global-express.svg
[issue-resolution-url]: https://github.com/eksant/global-express/issues
[license]: https://img.shields.io/github/license/eksant/global-express
[license-url]: https://img.shields.io/github/license/eksant/global-express
