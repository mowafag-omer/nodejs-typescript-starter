import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { UserRepo } from '../../userRepo'
import { GetUsers } from './getUsers'
import { GetUsersController } from './getUsersController'

const userRepo = new UserRepo(entitiesObject)
const getUsers = new GetUsers(userRepo)
const getUsersController = new GetUsersController(getUsers)

export { getUsersController }