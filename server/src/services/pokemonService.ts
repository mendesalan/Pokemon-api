import axios from 'axios'
import { pokemonApicall } from '../api/pokemonApicall'

export class pokemonService {

    static getPokemonData = async (limit) => {

        const response = await pokemonApicall.get(`pokemon?limit=${limit}`) // call Pokemon API with limit

        let briefPokemons: IBriefPokemon[] = await response.data.results // convert results to array

        // get additional information about the list of pokemons [abilities, photos, etc]
        let PokemonsAdditionalInfo = await Promise.all(
            briefPokemons.map(async (pokemon) => {

                let pokemonAditionalInfo = await (await axios.get(pokemon.url)).data
                return { url: pokemon.url, ...pokemonAditionalInfo}
            })
        )

        return PokemonsAdditionalInfo
    }
}

export interface IBriefPokemon {
    name: string;
    url:  string;
}

export interface IPokemonProfile {
    id: number;
    name: string;
    abilities?: Abilities[];
    sprites?: Sprite;
    types?: Type[];

}

type Abilities = {
    ability: {
      name: string;
      url: string;
    }
}

type Sprite = {
    back_default?: string;
    front_default: string;
}

type Type = {
    type: {
        name: string;
        url: string;
    }
}
