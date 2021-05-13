import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { CategoryRepo } from '../../categoryRepo'
import { GetCategory } from './getCategory'
import { GetCategoryController } from './getCategoryController'

const categoryRepo = new CategoryRepo(entitiesObject)
const getCategory = new GetCategory(categoryRepo)
const getCategoryController = new GetCategoryController(getCategory)

export { getCategory, getCategoryController }