import { port } from "./config/environment";
import express from "express";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import schema from "./graphql/schema";
import app from "./app";
import colors from "colors";
import connectDB from "./db";

async function startApolloServer() {
  try {
    console.log("Connecting to database...");
    await connectDB();

    const httpServer = http.createServer(app);
    const graphqlServer = new ApolloServer({
      schema,
      cors: {
        origin: true,
      },
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    console.log("Connecting to graphqlServer...");
    await graphqlServer.start();
    graphqlServer.applyMiddleware({ app });
    await new Promise((resolve) => httpServer.listen({ port }, resolve));
    console.log(
      `Server ready at http://localhost:${port}${graphqlServer.graphqlPath}`
    );
  } catch (error) {
    console.log('Not able to run GraphQL server');
  }
}

startApolloServer();
