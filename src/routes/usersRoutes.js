import express from "express"
const router = express.Router()

import controllers from "../controllers/usersControllers.js"

router.get("/all", controllers.getAll)
router.post("/create", controllers.createProd)
router.get("/search/:id", controllers.SearchById)
router.put("/update/:id", controllers.updateById)
router.delete("/remove/:id", controllers.removeById)


export default router
 