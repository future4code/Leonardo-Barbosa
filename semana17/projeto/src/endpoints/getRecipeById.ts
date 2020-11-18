import { Request, Response } from "express";
import { USER_ROLES } from "../data/insertUser";
import selectRecipeById from "../data/selectRecipeById";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData } from "../type/authenticationType";

export default async function getRecipeById(req: Request, res: Response) {

  try {

    const token: string = req.headers.authorization as string;

    const tokenData: AuthenticationData = getTokenData(token);

    if (tokenData.role !== USER_ROLES.ADMIN) {
      res.statusCode = 401
      throw new Error('Não autorizado')
    }
    const result = await selectRecipeById(req.params.id);

    if (!result) {
      throw new Error('Usuário não encontrado!')
    }

    res.status(200).send({
      id: result.id,
      title: result.title,
      description: result.description,
      start_date: result.date
    })


  } catch (error) {

    let { message } = error

    if (
      message === 'jwt must be provided' ||
      message === 'invalid signature' ||
      message === 'jwt expired'
    ) {
      res.statusCode = 401
      message = 'Não autorizado!'
    }

    res.send({
      message
    })

  }

}