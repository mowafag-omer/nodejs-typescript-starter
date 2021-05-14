import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { UserRepo } from '../../userRepo'
import { DeleteUser } from './deleteUser'
import { DeleteUserController } from './deleteUserController'

const skillRepo = new UserRepo(entitiesObject)
const deleteUser = new DeleteUser(skillRepo)
const deleteUserController = new DeleteUserController(deleteUser)

export { deleteUserController }
