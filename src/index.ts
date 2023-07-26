import "module-alias/register"
import express, { Express } from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import { initResolvers, initTypeSchema } from './resolver';
import { makeExecutableSchema } from "@graphql-tools/schema"

dotenv.config();

const startServer = async () => {
  const app: Express = express();
  const port = process.env.PORT || 3000;

  app.use('/', graphqlHTTP({
    schema: makeExecutableSchema({
      resolvers: initResolvers(),
      typeDefs: initTypeSchema()
  }),
    graphiql: process.env.GRAPHIQL === 'TRUE',
  }));



  app.listen(port, () => {
    console.log(`[Server]: Server is running at https://localhost:${port}`);
  });
}

startServer()