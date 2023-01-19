export const errorResponse = (res, status, err) => {
  res.status(status).json({ message: err })
}

export const successResponse = (res, status, result) => {
  res.status(status).json({ ok: true, message: result })
}
