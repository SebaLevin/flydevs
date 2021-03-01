const User = require('../db/models/User')


exports.resolvers = {
    Query: {
        async users(){
            return await User.find();

        }
    },
    Mutation: {
        async createUser(_, { input }){
            const user = new User(input);
            await user.save();
            return user;
        },
        async deleteUser(_, { _id }){
            return await User.findByIdAndDelete(_id)
        },
        async updateUser(_, { _id, input}){
            return await User.findByIdAndUpdate(_id, input, { new: true })
        }
    }
}