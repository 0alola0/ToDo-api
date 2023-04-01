import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/userRoutes.js'
import { todoRouter } from './routes/todoRoute.js'
import dotenv from "dotenv";

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/auth", userRouter)
app.use("/todo", todoRouter)




mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)


app.listen(3000, () => {
    console.log("listening to 3000")
})


