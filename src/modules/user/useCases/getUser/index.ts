import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { UserRepo } from '../../userRepo'
import { GetUser } from './getUser'
import { GetUserController } from './getUserController'

const userRepo = new UserRepo(entitiesObject)
const getUser = new GetUser(userRepo)
const getUserController = new GetUserController(getUser)

export { getUserController }