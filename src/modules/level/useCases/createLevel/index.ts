import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { LevelRepo } from '../../levelRepo'
import { CreateLevel } from './createLevel'
import { CreateLevelController } from './createLevelController'

const levelRepo = new LevelRepo(entitiesObject)
const createLevel = new CreateLevel(levelRepo)
const createLevelController = new CreateLevelController(createLevel)

export { createLevel, createLevelController }