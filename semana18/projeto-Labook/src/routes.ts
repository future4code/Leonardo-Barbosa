import { Router } from 'express'
import PostController from './controllers/PostController'
import UserController from './controllers/UserController'

const routes = Router()

routes.post('/users/signup', UserController.create)
routes.post('/users/login', UserController.login)
routes.post('/posts/create', PostController.create )
routes.get('/posts/:id', PostController.show)

export default routes