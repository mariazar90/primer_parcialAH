import {Router} from 'express'
import * as controller from '../controllers/client.api.controllers.js'

const route = Router()

route.get('/projects/:section/client', controller.getClient)
route.get('/projects/:section/client',controller.createClient)

export default route