import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('se requiere /')
})

export default router
