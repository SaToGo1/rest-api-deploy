import express, { json } from 'express'
import { moviesRouter } from './routes/movies'
import { corsMiddleware } from './middlewares/cors'

const app = express()
app.use(json())
app.use(corsMiddleware({}))
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json({ message: 'Hola Mundo' })
})

// Todos los recursos que sean MOVIES se identifican con /movies
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`open server in http://localhost:${PORT}`)
})
