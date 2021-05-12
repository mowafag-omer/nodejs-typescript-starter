import { databaseCredentials } from './config'
import { entities } from './entities'

import { __prod__, NODE_ENV } from '../../../constant'

const typeORMConfig = databaseCredentials[NODE_ENV]
typeORMConfig.entities = entities

export { typeORMConfig }