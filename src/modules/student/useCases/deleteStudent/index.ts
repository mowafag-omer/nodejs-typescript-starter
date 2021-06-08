import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { StudentRepo } from '../../studentRepo'
import { DeleteStudent } from './deleteStudent'
import { DeleteStudentController } from './deleteStudentController'

const studentRepo = new StudentRepo(entitiesObject)
const deleteStudent = new DeleteStudent(studentRepo)
const deleteStudentController = new DeleteStudentController(deleteStudent)

export { deleteStudentController }
