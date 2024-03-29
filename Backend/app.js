import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/index.js'
import { dbConnection } from './database/config.js'
import { boomErrorHandler, error404, errorHandler, logErrors } from './middlewares/error.handler.js'

dotenv.config()

// crear el servidor
const app = express()
const PORT = process.env.PORT || 10101

// coneccion database
dbConnection()

// Lectura y parseo del body
app.use(express.json(), cors(), express.static('./public')) // Directorio público

// Rutas
routes(app)

// controlador de errores
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)
app.use(error404)

// Escuchar peticiones
app.listen(PORT, () => console.log('Server running in port: ' + PORT))
