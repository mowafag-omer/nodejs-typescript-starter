import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { StudentRepo } from '../../studentRepo'
import { GetStudent } from './getStudent'
import { GetStudentController } from './getStudentController'

const studentRepo = new StudentRepo(entitiesObject)
const getStudent = new GetStudent(studentRepo)
const getStudentController = new GetStudentController(getStudent)

export { getStudentController }