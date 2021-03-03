import { ApolloError } from 'apollo-server-express';
import { hash, compare } from 'bcryptjs';
import { issueAuthToken, serializeAdmin } from '../../functions/AuthFunctions';


export default {
    Query: {
        authenticateAdmin: async (_, {email, password}, {Admin}) => {
            try {
                let admin = await Admin.findOne({ email });

                if(!admin){
                    throw new Error("Admin does not exist")
                }

                let isMatch = await compare(password, admin.password);
                
                if(!isMatch){
                    throw new Error("Invalid password")
                }
                admin = admin.toObject()
                admin.id = admin._id
                admin = serializeAdmin(admin);
                
                let token = await issueAuthToken(admin);

                return{
                    admin,
                    token
                }

            } catch (error) {
                    throw new ApolloError(error.message, 403)
                }
            }
    },
    Mutation: {
        registerAdmin: async (_, { newAdmin }, { Admin }) => {
            try {
                let { email } = newAdmin;
                
                let admin = await Admin.findOne({ email });
                
                if(admin){
                    throw new Error('Admin with that email already exists')
                };
                
                admin = new Admin(newAdmin);
                
                admin.password = await hash(newAdmin.password, 10);

                let result = await admin.save()

                result = result.toObject();
                result.id = result._id;
                result = serializeAdmin(result);

                let token = await issueAuthToken(admin);

                return {
                    token,
                    admin: result
                }
            } catch (error) {
                throw new ApolloError(error.message, 400)
            }
        }
    }
}