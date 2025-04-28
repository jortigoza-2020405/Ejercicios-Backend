import { Router } from 'express'
import { generadorPassword } from '../controllers/generadorPassword.controller.js'

const router = Router()

router.post('/', generadorPassword)

export default router
