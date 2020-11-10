import { Request, Response } from 'express';
import getUserByEmail from '../data/getUserByEmail';
import { User } from '../types/User';

export default async function getUser (req: Request, res: Response) {
  try {
    const { email } = req.body

    const user: User = await getUserByEmail( email )
    
    if (!user) {
      throw new Error("Usuário não encontrado")
    }

    res.status(200).send(user)
      

  } catch (error) {
    res.send(error.message || error.sqlMessage)
  }
}
