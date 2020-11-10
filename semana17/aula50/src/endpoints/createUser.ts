import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator";


export default async function createUser (req: Request, res: Response) {
  try {

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = generateId();

  
    await insertUser(id, userData.email, userData.password);

    const token = generateToken({
      id,
    });

    res.status(201).send({
      message: "token gerado pelo jwt",
      token
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};