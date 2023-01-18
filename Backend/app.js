import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/index.js'

dotenv.config()

// crear el servidor
const app = express()
const PORT = process.env.PORT || 10101

// Directorio público
app.use(express.static('./public'))

// Rutas
routes(app)
// TODO: CRUD eventos

// Escuchar peticiones
app.listen(PORT, () => console.log('Server running in port: ' + PORT))
