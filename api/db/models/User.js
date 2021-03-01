const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This field is required"]
    },
    lastName: {
        type: String,
        required: [true, "This field is required"]
    },
    age: {
        type: Number,
    }
});

const User =  mongoose.model("user", UserSchema);

module.exports = User;