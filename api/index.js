const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/routes.js");
require("dotenv").config();

const port = process.env.PORT || 8080;

mongoose.connect(process.env.DATA_BASE, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }  
);

mongoose.connection.once('open', () => {
    console.log("MongoDB Connected!")
});

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(routes)

app.listen(port, () => {
    console.log("Server running on port: ", port)
});
