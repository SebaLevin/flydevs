const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("dotenv").config()

const port = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(cors())


app.listen(port, () => {
    console.log("Server running on port: ", port)
});
