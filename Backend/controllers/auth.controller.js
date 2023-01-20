import boom from '@hapi/boom'
import bcrypt from 'bcryptjs'
import { catchAsync } from '../helpers/catchAsync.js'
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
  successResponse(res, 201, { msg: 'created', uid: user.id, name: user.name })
})

export const loginUser = (req, res) => {
  // const { email, password } = req.body

  successResponse(res, 200, 'logged in')
}

export const validateToken = (req, res) => {
  successResponse(res, 200, 'token')
}
