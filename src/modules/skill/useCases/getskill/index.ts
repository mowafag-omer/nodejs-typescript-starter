import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import { GetSkill } from './getSkill'
import { GetSkillController } from './getSkillController'

const skillRepo = new SkillRepo(entitiesObject)
const getSkill = new GetSkill(skillRepo)
const getSkillController = new GetSkillController(getSkill)

export { getSkill, getSkillController }