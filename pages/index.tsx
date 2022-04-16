import type { GetStaticProps, NextPage } from "next";
import { pokemonAPI } from "@api";
import { PokemonIndividual, PokemonsListResponse } from "@interfaces";
import { Grid } from "@nextui-org/react";
import PokemonCard from "@components/PokemonCard";
interface Props {
  pokemons: PokemonIndividual[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <>
      <Grid.Container gap={2} css={{ padding: 20 }}>
        {pokemons.map((item, index) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={index}>
            <PokemonCard pokemon={item} />
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokemonAPI.get<PokemonsListResponse>(
    "/pokemon?limit=24"
  );
  const pokemons: PokemonIndividual[] = data.results.map((item, index) => ({
    ...item,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default Home;
