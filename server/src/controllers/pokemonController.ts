import {Request, Response } from 'express'
import { pokemonService } from '../services/pokemonService'

export class pokemonController {

    static getPokemons = async (req: Request, res: Response) => {
        //extract limit from request
        let { limit } = req.query

        // if a limit is not passed we set a default of 20
        if(limit === undefined) {
            limit = '20'
        }

        // call serive logic
        let pokemonData = await pokemonService.getPokemonData(limit)

        res.send(pokemonData)
    }
}