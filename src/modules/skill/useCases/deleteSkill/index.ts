import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import { DeleteSkill } from './deleteSkill'
import { DeleteSkillController } from './deleteSkillController'

const skillRepo = new SkillRepo(entitiesObject)
const deleteSkill = new DeleteSkill(skillRepo)
const deleteSkillController = new DeleteSkillController(deleteSkill)

export { deleteSkill, deleteSkillController }
