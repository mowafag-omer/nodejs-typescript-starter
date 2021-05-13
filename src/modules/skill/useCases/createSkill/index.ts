import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import { CreateSkill } from './createSkill'
import { CreateSkillController } from './createSkillController'

// I build my repo with the entities I need
const skillRepo = new SkillRepo(entitiesObject)
const createSkill = new CreateSkill(skillRepo)
const createSkillController = new CreateSkillController(createSkill)

export { createSkill, createSkillController }