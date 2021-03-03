import {
    gql
} from "apollo-server-express";

export default gql `
    extend type Query {
        authAdmin: Admin!
        authenticateAdmin(email: String! password: String!): AuthResp!
    }

    extend type Mutation {
        registerAdmin(newAdmin: AdminInput!): AuthResp!
    }
    input AdminInput {
        email: String!
        password: String!
    }
    type Admin {
        id: ID!
        email: String!
    }
    type AuthResp {
        admin: Admin!,
        token: String!
    }
`;