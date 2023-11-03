import express from "express"
const router = express.Router()

import controllers from "../controllers/dialogflowControllers.js"

router.post("/sendDialogflow", controllers.webhook_dialogflow)
router.get("/readDialogflow", controllers.readDialogflow)

export default router