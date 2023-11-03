import dotenv from "dotenv-safe"
dotenv.config()

import express from "express"
const app = express()

app.use(express.json())

import cors from "cors"
app.use(cors())

import db from "./config/database.js";
db.connect()

const root = process.env.ROOT

import routesUser from "./routes/usersRoutes.js"
app.use(root, routesUser)

import routesClient from "./routes/clietRoutes.js"
app.use(root,routesClient)

import routeService from './routes/serviceRoutes.js'
app.use(root, routeService)

import routeDialogflow from './routes/dialogflowRoutes.js'
app.use(root, routeDialogflow)


export default app  