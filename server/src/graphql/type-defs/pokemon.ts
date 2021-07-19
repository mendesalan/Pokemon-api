import { gql } from 'apollo-server-express'

export default gql`

type Sprite {
  front_default: String
  back_default: String
}

type Ability {
  name: String
  url: String
}

type Abilities {
  ability: Ability
}

type Type {
  name: String
  url: String
}

type Types {
  type: Type
}

type Pokemon {
  id: Int
  name: String
  url: String
  types: [Types]
  sprites: Sprite
  abilities: [Abilities]
}

type Query {
  pokemon(limit: Int): [Pokemon]
}

`


