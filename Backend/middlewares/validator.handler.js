import { errorResponse } from '../helpers/response.js'

export const validatorHandler = schema => {
  return ({ body, params, query }, res, next) => {
    const data = { ...body, ...params, ...query }
    const { error } = schema.validate(data)

    if (!error) return next()

    errorResponse(res, 400, error)
  }
}
