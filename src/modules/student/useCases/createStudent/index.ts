import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { StudentRepo } from '../../studentRepo'
import { CreateStudent } from './createStudent'
import { CreateStudentController } from './createStudentController'

const studentRepo = new StudentRepo(entitiesObject)
const createStudent = new CreateStudent(studentRepo)
const createStudentController = new CreateStudentController(createStudent)

export { createStudentController }