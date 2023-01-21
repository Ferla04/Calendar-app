import Joi from 'joi'

const name = Joi.string().min(3).regex(/^[A-Z]+$/i).required()
const email = Joi.string().email().required()
const password = Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()

export const createUserSchema = Joi.object({
  name, email, password
})

export const loginUserSchema = Joi.object({
  email, password
})
