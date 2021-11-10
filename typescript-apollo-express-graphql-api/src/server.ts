import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageDisabled,
    ApolloServerPluginInlineTrace,
} from 'apollo-server-core';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
// import helmet from 'helmet';
import { schema } from './schema';

const PORT = process.env.PORT || 4000;
const GRAPHQL_URL = process.env.GRAPHQL_URL || 'graphql';

const startApolloServer = async () => {
    const app = express();
    // @ts-ignore
    app.use('*', cors());
    // app.use(helmet()); // GraphQL Playground fail with this
    app.use(compression());
    const httpServer = createServer(app);
    const server = new ApolloServer({
        typeDefs: schema.typeDefs,
        resolvers: schema.resolvers,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
            ApolloServerPluginLandingPageDisabled(),
            ApolloServerPluginInlineTrace(),
        ],
    });
    await server.start();
    server.applyMiddleware({ app, path: `/${GRAPHQL_URL}` });
    httpServer.listen({ port: PORT }, (): void => {
        console.log(`🚀GraphQL-Server is running on http://localhost:${PORT}/${GRAPHQL_URL} ...`);
        console.log(`Apollo Graphql Studio on https://studio.apollographql.com/sandbox/explorer ...`);
    });
};

startApolloServer();
