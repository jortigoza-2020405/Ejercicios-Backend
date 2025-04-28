import { Router } from 'express'
import { romanoAEntero } from '../controllers/romanoAEntero.controller.js'

const router = Router()

router.post('/', romanoAEntero)

export default router
