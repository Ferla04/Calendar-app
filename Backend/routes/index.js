import authRoutes from './auth.routes.js'

export default (app) => {
  app.use('/api/auth', authRoutes)
}