import { useState, useEffect } from "react";
import { NextPage } from "next";
import { favoritesPokemons } from "@utils/favoritesLocalStorage";
import ErrorMessage from "@components/ErrorMessage";
import FavoritesGrid from "@components/FavoritesGrid";

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
        <FavoritesGrid pokemonsFavs={pokemonsFavs} />
      )}
    </>
  );
};
export default Favorites;
