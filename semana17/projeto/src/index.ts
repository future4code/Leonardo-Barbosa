import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import getProfileById from './endpoints/getProfileById'
import createRecipe from './endpoints/createRecipe'
import getRecipeById from './endpoints/getRecipeById'
import getProfile from './endpoints/getProfile'

dotenv.config()

export const connection = knex({
   client: 'mysql',
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
   }
})


const app = express()
app.use(express.json())
app.use(cors())

app.post('/user/signup', createUser)
app.post('/login', login)
app.post('/recipe', createRecipe)

app.get('/user/profile', getProfile)
app.get('/user/:id', getProfileById)
app.get('/recipe/:id', getRecipeById)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})