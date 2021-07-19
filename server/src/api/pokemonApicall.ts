import axios from 'axios'

// create an prefix API call with axios to concatenate with path url
export const pokemonApicall = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})