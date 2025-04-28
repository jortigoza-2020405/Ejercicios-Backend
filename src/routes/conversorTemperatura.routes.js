import { Router } from 'express'
import { conversorTemperatura } from '../controllers/conversorTemperatura.controller.js'

const router = Router()

router.post('/', conversorTemperatura)

export default router
