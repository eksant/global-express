const { ApolloServer } = require('apollo-server-express');

const config = require('./config');
const typeDefs = require('../graphql/schema/schemagraphql.js');
const resolvers = require('../graphql/resolvers');

const connectToServer = app => {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app, path: config.app.mainRoute + '/graphql' });
};

module.exports = { connectToServer };
