import { Router } from 'express'
import { createCategoryController } from './useCases/createCategory/'
import { getCategoriesController } from './useCases/getCategories/'
import { getCategoryController } from './useCases/getCategory/'
import { updateCategoryController } from './useCases/updateCategory/';
import { deleteCategoryController } from './useCases/deleteCategory';

const categoryRouter: Router = Router();

///api/v1/skills/
categoryRouter.get('/getAll', (req, res) => getCategoriesController.execute(req, res))
categoryRouter.get('/get/:id', (req, res) => getCategoryController.execute(req, res))
categoryRouter.post('/create', (req, res) => createCategoryController.execute(req, res))
categoryRouter.put('/update/:id', (req, res) => updateCategoryController.execute(req, res))
categoryRouter.delete('/delete/:id', (req, res) => deleteCategoryController.execute(req, res))

export { categoryRouter }