import { Router } from "express"
import { createLevelController } from "./useCases/createLevel"

const levelRouter: Router = Router()

levelRouter.post('/create', (req, res) => createLevelController.execute(req, res))

export { levelRouter }