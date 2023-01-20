import express from 'express'
import { createUser, validateToken, loginUser } from '../controllers/auth.controller.js'
import { validatorHandler } from '../middlewares/validator.handler.js'
import { ValidateJwt } from '../middlewares/validatorJwt.js'
import { createUserSchema, loginUserSchema } from '../schemas/auth.schema.js'

const router = express.Router()

router
  .post('/', validatorHandler(loginUserSchema), loginUser)
  .post('/new', validatorHandler(createUserSchema), createUser)
  .get('/renew', ValidateJwt, validateToken)

export default router
