const mongoose = require('mongoose');
require('dotenv').config();

const Connect = {
    
    connect: async () =>  await mongoose.connect(process.env.DATA_BASE, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }  
    ),
    
    connection: async () =>  await mongoose.connection.once("open", () => {
    console.log("MongoDB Connected!")
    })
}


module.exports = Connect;