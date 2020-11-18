import { Request, Response } from 'express'
import knex from '../database/connection'
import { compare, generateId, generateToken, hash } from '../services/allServices'
import { User } from '../types/allTypes'



// app.post('/users/signup', async (req: Request, res: Response) => {
//   try {
//      let message = "Success!"
//      const { name, email, password } = req.body

//      if (!name || !email || !password) {
//         res.statusCode = 406
//         message = '"name", "email" and "password" must be provided'
//         throw new Error(message)
//      }

//      const id: string = generateId()

//      const cypherPassword = await hash(password);

//      await knex('labook_users')
//         .insert({
//            id,
//            name,
//            email,
//            password: cypherPassword
//         })

//      const token: string = generateToken({ id })

//      res.status(201).send({ message, token })

//   } catch (error) {
//      res.statusCode = 400
//      let message = error.sqlMessage || error.message

//      res.send({ message })
//   }
// })

// app.post('/users/login', async (req: Request, res: Response) => {
//   try {
//      let message = "Success!"

//      const { email, password } = req.body

//      if (!email || !password) {
//         res.statusCode = 406
//         message = '"email" and "password" must be provided'
//         throw new Error(message)
//      }

//      const queryResult: any = await knex("labook_users")
//         .select("*")
//         .where({ email })

//      if (!queryResult[0]) {
//         res.statusCode = 401
//         message = "Invalid credentials"
//         throw new Error(message)
//      }

//      const user: User = {
//         id: queryResult[0].id,
//         name: queryResult[0].name,
//         email: queryResult[0].email,
//         password: queryResult[0].password
//      }

//      const passwordIsCorrect: boolean = await compare(password, user.password)

//      if (!passwordIsCorrect) {
//         res.statusCode = 401
//         message = "Invalid credentials"
//         throw new Error(message)
//      }

//      const token: string = generateToken({
//         id: user.id
//      })

//      res.status(200).send({ message, token })

//   } catch (error) {
//      let message = error.sqlMessage || error.message
//      res.statusCode = 400

//      res.send({ message })
//   }
// })