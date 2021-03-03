import { pick } from "lodash";
import { sign } from "jsonwebtoken";
import { SECRET } from "../config";

export const issueAuthToken = async (admin) => {
    let token = await sign(admin, SECRET, {
        expiresIn: 3600 * 24,
    });
    return `Bearer ${token}`;
};

export const serializeAdmin = (admin) => pick(admin, ["id", "email"]);
