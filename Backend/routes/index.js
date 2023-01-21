import authRoutes from './auth.routes.js'
import eventsRoutes from './events.routes.js'

export default (app) => {
  app
    .use('/api/auth', authRoutes)
    .use('/api/events', eventsRoutes)
}
