import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { UserRepo } from '../../userRepo'
import { UpdateUser } from './updateUser'
import { UpdateUserController } from './updateUserController'

const userRepo = new UserRepo(entitiesObject)
const updateUser = new UpdateUser(userRepo)
const updateUserController = new UpdateUserController(updateUser)

export { updateUserController }