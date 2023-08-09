import express from "express"
const router = express.Router()

import controllers from "../controllers/usersControllers.js"

router.get("/", controllers.getAllProds)
router.post("/cad", controllers.createProds)

export default router
 