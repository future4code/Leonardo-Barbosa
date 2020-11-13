import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/generateHash";
import {generateId} from "../services/idGenerator";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {
        
        if (
            !req.body.name ||
            !req.body.email ||
            !req.body.password
        ) {
          throw new Error('Preencha os campos "name", "email" e "password"')
        }

        const id: string = generateId()

        const hashPassword = await hash(req.body.password)

        await insertUser(
            id,
            req.body.name,
            req.body.email,
            hashPassword,
            req.body.role
        )

         const token: string = generateToken({
            id,
            role: req.body.role
         })

        res
            .status(201)
            .send({
               message:"Usuário criado!",
               token
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}