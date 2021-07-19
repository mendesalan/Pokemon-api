# Divisio full stack challenge

## Story
Create a pokemon listing using the [PokeAPI](https://pokeapi.co/)

Right on the home page it is possible to see a statement of the result by running the request `https://pokeapi.co/api/v2/pokemon?limit=20`, resulting in a listing of pokemons.

## Instructions

### Step 0:
Create a fork of this repository

### Step 1:
Create a GraphQL Query on the server consuming this api and providing it to the client

Example of how it should be running on the playground
```graphql
query {
  pokemons {
    id: Int
    name: String
  }
}
```

Example of what the expected result would be:
```json
[
  {
    "id": 1,
    "name": "bulbasaur"
  },
  {
    "id": 2,
    "name": "ivysaur"
  },
  ...
]
```

### Step 2:
Create a component on the client to list these pokemons. A simple listing just showing the result.
Example of how the use of the component would look like:
```js
  <PokemonList
    pokemons={data}
  />
```

### Step 3:
Consume the query using Apollo client. Preference for use of apollo-hooks.

## Documentation & Tips
- Apollo queries documentation: https://www.apollographql.com/docs/react/data/queries/
- Apollo is already preconfigured for use on the client. This exercise consists of creating and consuming the query only.

## Requirements
- Use Typescript
- Use styled-components for styling

## Bonus point (not required)
- Explore more [PokeAPI](https://pokeapi.co/) for, maybe, create a new screen to display the details of each pokemon by clicking on the list. It is up to you.
- Write tests (back and/or front)