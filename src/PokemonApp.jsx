import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { page, pokemons, isLoading } = useSelector((state) => state.pokemons);


  useEffect(() => {
    dispatch(fetchPokemons(0));
  }, [dispatch]);

  return (
    <>
      <h2>Pokemon App</h2>
      <hr />
      {isLoading && <span> Loading... </span>}
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>

      <button
        disabled={isLoading ||  page <= 0}
        onClick={() => dispatch(fetchPokemons(page - 1))}
      >
        Previous
      </button>

      <button
        style={{ marginLeft: "10px" }}
        disabled={isLoading}
        onClick={() => dispatch(fetchPokemons(page + 1))}
      >
        Next
      </button>
    </>
  );
};
