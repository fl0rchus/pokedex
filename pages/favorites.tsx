import { useState, useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { favoritesPokemons } from "@utils/favoritesLocalStorage";
import { Grid, Card } from "@nextui-org/react";
import { PRIMARY_IMAGE_URL } from "@utils/constants";
import ErrorMessage from "@components/ErrorMessage";

const Favorites: NextPage = () => {
  const [pokemonsFavs, setPokemonsFavs] = useState<number[]>([]);

  useEffect(() => {
    setPokemonsFavs(favoritesPokemons());
  }, []);

  return (
    <>
      {pokemonsFavs.length === 0 ? (
        <ErrorMessage message="No hay favoritos" />
      ) : (
        <Grid.Container gap={4}>
          {pokemonsFavs.map((id) => (
            <Grid xs={12} sm={6} md={3} xl={1} key={id}>
              <Link href={`/pokemon/${id}`} passHref>
                <Card
                  hoverable
                  clickable
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Body>
                    <Card.Image
                      src={`${PRIMARY_IMAGE_URL}${id}.svg`}
                      width={150}
                      height={150}
                    />
                  </Card.Body>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </>
  );
};
export default Favorites;
