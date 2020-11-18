import { Request, Response } from "express";
import insertRecipe from "../data/insertRecipe";
import { USER_ROLES } from "../data/insertUser";
import { getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { AuthenticationData } from "../type/authenticationType";

export default async function createRecipe(req: Request, res: Response){

  try {

    const token: string = req.headers.authorization as string;

    const tokenData: AuthenticationData = getTokenData(token);

    if (tokenData.role !== USER_ROLES.ADMIN) {
      res.statusCode = 401
      throw new Error('Não autorizado')
    }

    const { title, description } = req.body;

    if(
      !title ||
      !description
    ) {
      throw new Error('Preencha os campos "title" e "description"')
    }

    const id: string = generateId()
    const date: Date = new Date()

    await insertRecipe(
      id,
      req.body.title,
      req.body.description,
      date,
      req.body.user_id
    )

    res
      .status(201)
      .send({ message: 'Receita criada com sucesso!'})
    
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage
  })
  }
}