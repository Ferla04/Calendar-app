import jwt from 'jsonwebtoken'
import { errorResponse } from '../helpers/response.js'

export const ValidateJwt = async (req, res, next) => {
  try {
    // x-token headers
    const token = req.header('x-token')
    if (!token) return errorResponse(res, 401, "there isn't token")

    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED)

    req.uid = uid
    req.name = name
    next()
  } catch (error) {
    console.log(error)
    errorResponse(res, 401, 'token expired')
  }
}
