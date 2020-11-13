import { connection } from "../index";

export default async function insertUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
) {
    await connection.insert({
        id,
        name,
        email,
        password,
        role
    }).into('cookenu_users')
}

export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}