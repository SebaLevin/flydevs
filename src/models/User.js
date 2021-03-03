import { Schema, model } from  'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
});

const User = model('user', userSchema);

export default User;


