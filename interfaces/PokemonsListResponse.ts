export interface PokemonsListResponse {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonIndividual[];
}

export interface PokemonIndividual {
    name: string;
    url: string;
    id: number,
    img: string
}
