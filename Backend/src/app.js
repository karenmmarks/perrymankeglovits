const express = require('express');
const http = require('http');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require('graphql-import');

const createApp = () => {
  const app = express();

  app.use(cors());

  const server = new ApolloServer({
    typeDefs: importSchema('src/schema.graphql'),
    resolvers: resolver,
  });

  server.applyMiddleware({ app });

  return http.createServer(app);
};

module.exports = createApp;
