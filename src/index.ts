import { createServer } from './app/http/app'
import { createConnection } from 'typeorm'

import { typeORMConfig } from './app/database/typeorm'


createConnection(typeORMConfig).then(_ => {
    createServer();
})