import { Request, Response } from 'express'
import knex from '../database/connection'
import { compare, generateId, generateToken, hash } from '../services/allServices'
import { User } from '../types/allTypes'
import { existsOrError, notExistsOrError } from '../util/validations'


class UserController {

  static async create(req: Request, res: Response) {
    const { name, email, password } = req.body

    try {
      existsOrError(name, 'name is missing')
      existsOrError(email, 'email is missing')
      existsOrError(password, 'password is missing')

      const userFromDB = await knex('labook_users').where({ email }).first()
      notExistsOrError(userFromDB, 'email already exists')

    } catch (error) {
      return res.status(400).send({ message: error })
    }

    const id: string = generateId()
    const hashPassword = await hash(password)

    try {
      await knex('labook_users').insert({ id, name, email, hashPassword })

      const token: string = generateToken({
        id
      })

      return res.status(201).send({
        message: 'Usuário criado com sucesso!',
        token
      })

    } catch (error) {
      res.status(400).send({
        message: error.message || error.sqlMessage
      })
    }
  }
}

export default UserController



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