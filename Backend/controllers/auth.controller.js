import boom from '@hapi/boom'
import bcrypt from 'bcryptjs'
import { catchAsync } from '../helpers/catchAsync.js'
import { generateJWT } from '../helpers/jwt.js'
import { successResponse } from '../helpers/response.js'
import UserTable from '../models/User.model.js'

export const createUser = catchAsync(async (req, res) => {
  const { email, password } = req.body

  let user = await UserTable.findOne({ email })
  if (user) throw boom.badRequest('existing user with that email')

  user = new UserTable(req.body)

  // Encriptar contraseña
  const salt = bcrypt.genSaltSync()
  user.password = bcrypt.hashSync(password, salt)

  await user.save()

  // Generar Token
  const token = await generateJWT(user.id, user.name)
  successResponse(res, 201, { uid: user.id, name: user.name, token })
})

export const loginUser = catchAsync(async (req, res) => {
  const { email, password } = req.body

  const user = await UserTable.findOne({ email })
  if (!user) throw boom.badRequest('invalid email or password')

  // confirmar password
  const validPassword = bcrypt.compareSync(password, user.password)
  if (!validPassword) throw boom.badRequest('invalid email or password')

  // Genera token
  const token = await generateJWT(user.id, user.name)
  successResponse(res, 200, { uid: user.id, name: user.name, token })
})

export const validateToken = catchAsync(async (req, res) => {
  // Generar token
  const token = await generateJWT(req.uid, req.name)
  successResponse(res, 200, { token })
})
