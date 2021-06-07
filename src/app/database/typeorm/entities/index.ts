import { User } from './user'
import { Skill } from './skill'
import { Category } from './category'
import { Level } from './level'
import { Progress } from './progress'

const entities = [User, Skill, Category, Level, Progress]
const entitiesObject = { User, Skill, Category, Level, Progress }

export { entities, entitiesObject }