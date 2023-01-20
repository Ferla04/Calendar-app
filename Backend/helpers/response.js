export const errorResponse = (res, status, err) => {
  res.status(status).json({ ok: false, message: err })
}

export const successResponse = (res, status, result) => {
  res.status(status).json({ ok: true, result })
}
