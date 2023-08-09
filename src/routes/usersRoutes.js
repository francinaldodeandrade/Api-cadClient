import express from "express"
const router = express.Router()

import controllers from "../controllers/usersControllers.js"

router.get("/all", controllers.getAll)
router.post("/create", controllers.createProd)

export default router
 