import { Router } from 'express'
import { createCategoryController } from './useCases/createCategory/'

const categoryRouter: Router = Router();

///api/v1/skills/
categoryRouter.post('/create', (req, res) => createCategoryController.execute(req, res))

export { categoryRouter }