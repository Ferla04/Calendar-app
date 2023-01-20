import jwt from 'jsonwebtoken'
import { catchAsync } from '../helpers/catchAsync.js'
import { errorResponse } from '../helpers/response.js'

export const ValidateJwt = catchAsync(async (req, res, next) => {
  // x-token headers
  const token = req.header('x-token')
  if (!token) return errorResponse(res, 401, "there isn't token")

  const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED)

  req.uid = uid
  req.name = name
  next()
})
