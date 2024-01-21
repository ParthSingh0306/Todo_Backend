import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "20kb"}))

import todoRouter from "./routes/todo.router.js"

//routes declaration
app.use("/todo", todoRouter)

export { app }