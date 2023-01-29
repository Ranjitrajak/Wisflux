import express, { Application} from 'express'
import usersRouter from './Routes/userRoutes'

const app: Application = express()
const PORT: number =  3000

app.use(express.json())

app.use('/user', usersRouter)

app.listen(PORT, (): void => {
    console.log(`Listening on ${PORT}`)
})