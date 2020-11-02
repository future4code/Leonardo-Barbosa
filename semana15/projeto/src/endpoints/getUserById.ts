import { Request, response, Response } from "express";
import selectUserById from "../data/selectUserById";

export default async function getUserById(
  req: Request, res: Response
){
  try {

    // consultar o banco de dados de
    const user = await selectUserById(req.params.id);

    if (!user){
      res.status(404).send({message: 'Usuário não foi encontrado.'})

      return
    }

    // responder a requisição 
    res.status(200).send({message: 'Usuário encontrado.', 
      id: user.id,
      nickname: user.nickname
    });

    
  } catch (error) {
    res.status(400).send({message: error.message || error.sqlMessage})
  }
}