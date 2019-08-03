# Global Express

A Command line interface for instantly building an express server.  
Create models, graphql (resolvers and schema), rest-api (controllers, routes and services) and doc-api (swagger) in matter of seconds.

## Installation

Install it once globally:

```
$ npm install -g global-express
```

## Getting Started

### Initializing the application structure

```
$ mkdir my-server
$ cd my-server
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
$ npm install
```

_Note: when running all of the further commands, please stay in the my-server directory_

## Notes

**Note:** The experience this CLI provides does not work as smooth in Git Bash terminal, since it is not an interactive terminal, but if you are using Git Bash inside VS Code, then there are no problems, I found no complications using any other terminal.

Feel free to post issues if you run into any.
