import { gql } from 'apollo-server-express';

export default gql `
    extend type Query{
        getAllUsers: [User!]! 
        getFilteredUsers(filter: UserInput!): [User]! @isAuth
    }

    extend type Mutation{
        createUser(newUser: UserInput!): User! @isAuth
        updateUser(updatedUser: UserInput!, id: ID!): User! @isAuth
        deleteUser(id: ID!): UserNotification! @isAuth
    }

    input UserInput {
        name: String!
        lastName: String
        age: Int
    }

    type User{
        id: ID!
        name: String!
        lastName: String
        age: Int
    }

    type UserNotification{
        id: ID!
        message: String!
        success: Boolean!
    }
`