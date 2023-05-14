import {Router} from 'express'
import * as controller from '../controllers/projects.api.controllers.js'
import ClientRoute from './client.api.routes.js'
const route = Router()

route.get('/projects', controller.getProjects)
route.post('/projects', controller.createProject)

route.get('/projects/:section', controller.getProjectBySection)
route.put('/projects/:section', controller.replaceProject)
route.patch('/projects/:section', controller.updateProduct)
route.delete('/projects/:section', controller.updateProduct)

route.use(ClientRoute)

export default route