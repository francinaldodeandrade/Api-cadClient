import express from "express"
const router = express.Router()

import controllers from "../controllers/usersControllers.js"

router.get("/", controllers.getAll)
router.post("/", controllers.createUser)

export default router
 