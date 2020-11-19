import { Router } from 'express'
import PostController from './controllers/postController'
import UserController from './controllers/userController'

const routes = Router()

routes.post('/users/signup', UserController.create)
routes.post('/users/login', UserController.login)
routes.post('/posts/create', PostController.create )
routes.get('/posts/:id', PostController.show)

export default routes