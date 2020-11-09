import { Request, Response } from 'express';
import { filterUserByType } from '../data/filterUserByType'


export const getUserByType = async(req: Request,res: Response): Promise<void> =>{
   try {
      const type = String(req.query.type).toLowerCase();
      
      if(!type) {
         throw new Error('Você deve inserir um valor para "type"')
      }

      const result = await filterUserByType(type);

      if(!result.length) {
         res.statusCode = 404
         throw new Error('Você deve inserir "cx", "operations" ou "teacher"')
      }

      res.status(200).send(result)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}