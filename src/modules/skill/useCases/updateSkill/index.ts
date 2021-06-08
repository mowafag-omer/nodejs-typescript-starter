import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import { UpdateSkill } from './updateSkill'
import { UpdateSkillController } from './updateSkillController'


// I build my repo with the entities I need
const skillRepo = new SkillRepo(entitiesObject)
const updateSkill = new UpdateSkill(skillRepo)
const updateSkillController = new UpdateSkillController(updateSkill)

export { updateSkillController }