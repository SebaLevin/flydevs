const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        require: [true, "This field is required"]
    },
    lastName: {
        type: String,
        require: [true, "This field is required"]
    },
    age: {
        type: Number,
    }
});

const User = mongoose.Model("user", UserSchema);

module.exports = User;