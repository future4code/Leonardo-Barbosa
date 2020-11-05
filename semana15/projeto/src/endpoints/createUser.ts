import { Request, Response } from "express";
import insertUser from "../data/insertUser";

export default async function createUser(
  req: Request, res: Response
){
  try {

  // validar entradas da requisição

    if (
      !req.body.name ||
      !req.body.nickname ||
      !req.body.email
    ) { res.status(400).send('Complete todos os campos') 
      
      return

    }
 
    // consultar o banco de dados de

    const id: string = Date.now() + Math.random().toString();

    await insertUser (
      id,
      req.body.name,
      req.body.nickname,
      req.body.email
    ) 
    
    // responder a requisição
    
    res.status(200).send('Usuário criado com sucesso')
   
    
  } catch (error) {
    res.status(400).send({message: error.message || error.sqlMessage})
  }
}