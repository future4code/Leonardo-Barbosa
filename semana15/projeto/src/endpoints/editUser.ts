import { Request, Response } from "express";
import { connection } from "..";
import updateUser from "../data/updateUser";

export default async function editUser(
  req: Request, res: Response
){
  try {

    // validar entradas da requisição
    if(
      req.body.name === '' ||
      req.body.nickname === '' ||
      req.body.email === ''
    ){
      res.status(400).send({message: 'Preencha todos os campos'});

      return
    }

    if (!req.body.name && !req.body.nickname && !req.body.email) {
      
      res.status(400).send({message: 'Preencha pelo menos um campo'})

      return
    }

    // consultar o banco de dados de

    await updateUser(
      req.params.id,
      req.body.name,
      req.body.nickname,
      req.body.email
    )

    // responder a requisição 

    res.status(200).send({message: 'Usuário atualizado'})

    
  } catch (error) {
    res.status(400).send({message: error.message || error.sqlMessage})
  }
}