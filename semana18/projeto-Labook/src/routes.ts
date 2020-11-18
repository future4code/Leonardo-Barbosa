import { Router } from 'express'
import UserController from './controllers/userController'

const routes = Router()

routes.post('/users/signup', UserController.create)

export default routes