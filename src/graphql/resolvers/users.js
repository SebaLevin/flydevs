export default {
    Query: {
        getAllUsers: async (_, {}, {User}) => {
            const users = await User.find();
            return users;
        },
        getFilteredUsers: async (_, {filter}, {User}) => {
            const users = await User.find({name : {$regex : `.*${filter.name}*.`}})
            return users
        }
    },
    Mutation: {
        createUser: async (_, { newUser }, { User }) => {
            const user = await User.create(newUser);
            user.save();
            return user;
        },
        updateUser: async (_, { updatedUser, id }, {User}) => {
            const user = await User.findByIdAndUpdate(id, {...updatedUser}, { new: true });
            return user;
        },
        deleteUser: async (_, {id}, {User}) => {
            const user = await User.findByIdAndDelete(id);
            return{
                id: id,
                message: `${user.name} deleted succesfully`,
                success: true
            }
        }
    }
}
