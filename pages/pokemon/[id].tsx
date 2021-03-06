import { useState } from "react";

import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";

import { Grid, Card, Text, Container, Button } from "@nextui-org/react";
import confetti from "canvas-confetti";

import { Pokemon } from "@interfaces";
import { toggleFavorite, checkFavorite } from "@utils/favoritesLocalStorage";

import HeartIcon from "@components/HeartIcon";
import { getPokemon } from "@utils/getPokemon";

interface Props {
  pokemon: {
    id: number;
    name: string;
    image: string;
    sprites: [];
  };
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const { name, sprites, image, id } = pokemon;
  const [isFav, setIsFav] = useState<boolean>(checkFavorite(id));

  const handleFavorites = () => {
    toggleFavorite(id);
    setIsFav(!isFav);
    if (!isFav) {
      confetti({
        zIndex: 1000,
        particleCount: 100,
        spread: 100,
        origin: {
          x: 1,
          y: 1,
        },
      });
    }
  };

  return (
    <Grid.Container gap={2} css={{ marginTop: 20 }}>
      <Grid xs={12} sm={4}>
        <Card css={{ padding: 30 }} hoverable>
          <Card.Body
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card.Image src={image} alt={name} width="100%" height={200} />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={8}>
        <Card css={{ padding: 20 }}>
          <Card.Header
            css={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text h1 transform="capitalize">
              {name}
            </Text>
            <Button
              icon={<HeartIcon fill={isFav ? "currentColor" : "none"} />}
              color="gradient"
              auto
              ghost={!isFav}
              onClick={handleFavorites}
            >
              {isFav ? "Guardado" : "Guardar"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Text h3 weight="light">
              Sprites:
            </Text>
            <Container display="flex" alignItems="center" css={{ padding: 0 }}>
              {sprites.map((item, index) => (
                <Image
                  src={item}
                  alt={`${name} sprite`}
                  width={120}
                  height={120}
                  key={index}
                />
              ))}
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const totalPokemons = [...Array(24)].map((_, index) => `${index + 1}`);
  return {
    paths: totalPokemons.map((id) => ({ params: { id } })),
    //fallback: false,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const pokemon = await getPokemon(id);

  if (!pokemon) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPage;
