import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import { GetSkills } from './getSkills'
import { GetSkillsController } from './getSkillsController'

// I build my repo with the entities I need
const skillRepo = new SkillRepo(entitiesObject)
const getSkills = new GetSkills(skillRepo)
const getSkillsController = new GetSkillsController(getSkills)

export { getSkills, getSkillsController }