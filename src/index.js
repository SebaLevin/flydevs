import express from 'express';
import { success, error } from 'consola';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './models/User';
import Admin from './models/Admin';
import { DB, PORT, IN_PROD } from "./config";
import AuthMiddleware from './middlewares/auth';
import { schemaDirectives } from './graphql/directives/index'

const app = express();
app.use(AuthMiddleware)
const server = new ApolloServer({
    typeDefs,
    resolvers,
    schemaDirectives,
    playground: IN_PROD,
    context: ( req => {
        let {isAuth, admin} = req
        return {
            req,
            isAuth,
            admin,
            User,
            Admin
        }
    }),
});

const serverUp = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        success({
            badge: true,
            message: `MongoDB connected `,
        });
    
        server.applyMiddleware({ app });
    
        app.listen(PORT || 5000, () =>
            success({
                badge: true,
                message: `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`,
            })
        );
    } catch (err) {
        error({
            badge: true,
            message: err.message
        })
    }
};

serverUp();
