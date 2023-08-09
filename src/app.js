import dotenv from "dotenv-safe"
dotenv.config()

import express from "express"
const app = express()

app.use(express.json())

import cors from "cors"
app.use(cors())

import db from "./config/database.js";
db.connect()

import routes from "./routes/usersRoutes.js"
app.use("/prod", routes)


export default app