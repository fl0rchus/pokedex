import { pokemonAPI } from "@api";
import { Pokemon } from "@interfaces";

export const getPokemon = async (id: string) => {
    try {

        const { data } = await pokemonAPI.get<Pokemon>(`/pokemon/${id}`);

        const pokemon = {
            id: Number(id),
            name: data.forms[0].name,
            image: data.sprites.other?.dream_world.front_default,
            sprites: [
                data.sprites.back_default,
                data.sprites.back_shiny,
                data.sprites.front_default,
                data.sprites.front_shiny,
            ],
        };

        return pokemon

    } catch (error) {
        return null
    }
}