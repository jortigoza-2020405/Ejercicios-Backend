import { Router } from 'express'
import { validarPassword } from '../controllers/validarPassword.controller.js'

const router = Router()

router.post('/', validarPassword)

export default router
