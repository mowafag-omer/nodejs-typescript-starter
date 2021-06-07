import { User } from './user'
import { Skill } from './skill'
import { Category } from './category'
import { Level } from './level'
import { Progress } from './progress'
import { Student } from './student'

const entities = [User, Student, Skill, Category, Level, Progress]
const entitiesObject = { User, Student, Skill, Category, Level, Progress }

export { entities, entitiesObject }