const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { graphqlHTTP } = require('express-graphql')
const Connect = require("./db/connection");
const app = express();
const schema = require("./graphQL/schema.js")
require("dotenv").config();

//Settign up port
const port = process.env.PORT || 8080;

//Connecting to DataBase
Connect.connect();
Connect.connection();

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//GraphQL config
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))

//Server Running
app.listen(port, () => {
    console.log("Server running on port:", port)
});
