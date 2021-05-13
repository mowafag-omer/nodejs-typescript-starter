import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { CategoryRepo } from '../../categoryRepo'
import { DeleteCategory } from './deleteCategory'
import { DeleteCategoryController } from './deleteCategoryController'

const categoryRepo = new CategoryRepo(entitiesObject)
const deleteCategory = new DeleteCategory(categoryRepo)
const deleteCategoryController = new DeleteCategoryController(deleteCategory)

export { deleteCategory, deleteCategoryController }
