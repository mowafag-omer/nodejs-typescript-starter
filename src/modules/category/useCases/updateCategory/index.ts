import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { CategoryRepo } from '../../categoryRepo'
import { UpdateCategory } from './updateCategory'
import { UpdateCategoryController } from './updateCategoryController'


// I build my repo with the entities I need
const categoryRepo = new CategoryRepo(entitiesObject)
const updateCategory = new UpdateCategory(categoryRepo)
const updateCategoryController = new UpdateCategoryController(updateCategory)

export { updateCategoryController }