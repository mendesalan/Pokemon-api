import express from 'express'
import {pokemonController} from '../controllers/pokemonController'

import { mockUsers } from '../mocks/users'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('REST Api online!')
})

router.get('/users', (req, res) => {
  res.send(mockUsers)
})

// pokemon route that calls the controller.
router.get('/pokemons', pokemonController.getPokemons)

export default router
