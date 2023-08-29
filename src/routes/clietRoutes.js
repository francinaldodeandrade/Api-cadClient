import express from "express"
const router = express.Router()

import clietControllers from "../controllers/clietControllers.js"
import authControllers from "../controllers/auth.Controllers.js"
import authentication from "../auth/validateCliet.js"


//rota para entidade clientes

router.post("/createCliet", clietControllers.createCliet)
router.post("/login", authControllers.login)

router.get("/all", clietControllers.getCliet)
router.get("/search/:id", authentication.validateToken, clietControllers.seaById)
router.put("/update/:id", authentication.validateToken, clietControllers.updById)
router.delete("/remove/:id", authentication.validateToken, clietControllers.delById)


export default router
 