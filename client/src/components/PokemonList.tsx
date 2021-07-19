import { useEffect, useState } from 'react'
import client from '../config/apollo-client'
import { IPokemon } from '../types/pokemon-type';
import gql from 'graphql-tag'

const PokemonList = () => {

  const [limit, setLimit] = useState(20);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    getPokemon()
  }, [])

  async function getPokemon() {
    const query = gql`
      query pokemon($limit: Int) {
        pokemon(limit: $limit) {
          id,
          name,
          url,
          sprites {
            front_default,
            back_default
          },
          abilities {
            ability{
              name,
              url
            }
          }
        }
      }
    `

  const { data } = await client.query({ query, variables:  { limit }  })

  const pokeList = [ ...data.pokemon ]
  console.log('===> ', pokeList);

    setPokemons(pokeList)
  }

  return pokemons !== undefined ? (
    <div>
      <h1>Pokemons</h1>

      <div >
        {pokemons.map((pokemon, index) => {
          return <div key={index}>

            <img src={pokemon.sprites.front_default} alt="A Pokemon" />
            <p>id: {pokemon.id}</p>
            <p>Name: {pokemon.name}</p>
            Abilities: {pokemon.abilities.map((ability, index) => {
              return  <p key={index}>{ability.ability.name}</p>


            })}
            <p>for more information:  <a href={pokemon.url}>click here</a> </p>
            <br />
            <br />
            <br />
          </div>

        })}
      </div>
    </div>
  ) : null

}

export default PokemonList
