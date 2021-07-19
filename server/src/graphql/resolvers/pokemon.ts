import { pokemonService } from "../../services/pokemonService";

//pokemon Graphql setup
export default {
    Query: {
        pokemon: async(_, {limit}) => { return await pokemonService.getPokemonData(limit) }
    }
}