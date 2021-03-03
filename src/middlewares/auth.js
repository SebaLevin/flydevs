import { verify } from 'jsonwebtoken';
import { SECRET } from '../config/index';
import Admin from '../models/Admin';

const AuthMiddleware = async (req, res, next) => {
    const authHeaders = req.get("Authorization");
    if(!authHeaders){
        req.isAuth = false;
        return next();
    }
    let token = authHeaders.split(' ')[1];
    if(!token || token === ''){
        req.isAuth = false;
        return next();
    }

    let decodeToken;

    try {
        decodeToken = verify(token, SECRET)
    } catch (error) {
        req.isAuth = false;
        return next();
    };

    if(!decodeToken){
        req.isAuth = false;
        return next();
    }

    let authAdmin = await Admin.findById(decodeToken.id);
    if(!authAdmin){
        req.isAuth = false;
        return next();
    }

    req.admin = authAdmin;
    req.isAuth = true;
    return next();
}   

export default AuthMiddleware;