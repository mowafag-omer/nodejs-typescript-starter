import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { StudentRepo } from '../../studentRepo'
import { UpdateStudent } from './updateStudent'
import { UpdateStudentController } from './updateStudentController'

const studentRepo = new StudentRepo(entitiesObject)
const updateStudent = new UpdateStudent(studentRepo)
const updateStudentController = new UpdateStudentController(updateStudent)

export { updateStudentController }