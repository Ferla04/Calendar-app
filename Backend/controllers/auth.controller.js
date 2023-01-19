import { successResponse } from '../helpers/response.js'

export const createUser = (req, res) => {
  // const { name, email, password } = req.body
  successResponse(res, 201, 'created')
}

export const loginUser = (req, res) => {
  // const { email, password } = req.body

  successResponse(res, 200, 'logged in')
}

export const validateToken = (req, res) => {
  successResponse(res, 200, 'token')
}
