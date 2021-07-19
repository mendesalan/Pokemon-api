import express from 'express'

import { setupRoutes } from '../config/routes'
import { setupApolloServer } from '../config/apollo-server'

const app = express()

setupApolloServer(app)
setupRoutes(app)


export default app
