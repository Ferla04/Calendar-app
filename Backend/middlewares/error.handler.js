import { errorResponse } from '../helpers/response.js'

export const logErrors = (err, req, res, next) => {
  console.error(err)
  next(err)
}

export const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err
    return errorResponse(res, output.statusCode, output.payload.message)
  }
  next(err)
}

export const errorHandler = (err, req, res, next) => {
  errorResponse(res, 500, 'Error inesperado...')
}

export const error404 = (req, res) => {
  return errorResponse(res, 404, 'URL is not valid, please check the API documentation')
}
