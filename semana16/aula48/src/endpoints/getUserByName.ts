import { Request, Response } from 'express';
import { filterUsers } from '../data/filterUsers'

export const getUserByName = async(req: Request,res: Response): Promise<void> =>{
   try {
      const name = String(req.query.name).toLowerCase();
      
      if(!name) {
         throw new Error('Você deve inserir um valor para "name"')
      }

      const result = await filterUsers(name);

      if(!result.length) {
         res.statusCode = 404
         throw new Error('Nenhum usuário encontrado!')
      }

      res.status(200).send(result)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}