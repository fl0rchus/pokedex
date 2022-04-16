import axios from "axios"

export const allPokemons = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})

