import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/userRoutes.js'
import { todoRouter } from './routes/todoRoute.js'
import dotenv from "dotenv";
import swaggerMiddleware from './middlewares/swagger-middleware.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/auth", userRouter)
app.use("/api/todo", todoRouter)
app.use("/", ...swaggerMiddleware());



mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)


app.listen(3000)



