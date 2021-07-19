import { Express } from 'express'

import apiRoutes from '../api'

export const setupRoutes = (app: Express): void => {
  app.use('/api', apiRoutes)
}
