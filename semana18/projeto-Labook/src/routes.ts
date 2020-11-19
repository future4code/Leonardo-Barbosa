import { Router } from 'express'
import UserController from './controllers/userController'

const routes = Router()

routes.post('/users/signup', UserController.create)
routes.post('/users/login', UserController.login)
routes.post('/posts/create', )
routes.post('/posts/:id', )

export default routes