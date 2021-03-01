const { makeExecutableSchema } = require("graphql-tools");
const { resolvers } = require("./resolvers.js");

const typeDefs = `
    type Query{
        users: [User]
    }

    type User{
        _id: ID
        name: String!
        lastName: String!
        age: Int
    }

    type Mutation{
        createUser(input: UserInput!): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }

    input UserInput{
        name: String!
        lastName: String!
        age: Int
    }
`;

module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
});
