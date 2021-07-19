import { mergeTypeDefs } from '@graphql-tools/merge'

import accountTypeDefs from './account'
import pokemonTypeDefs from './pokemon'

export default mergeTypeDefs([
  accountTypeDefs,
  pokemonTypeDefs
])
