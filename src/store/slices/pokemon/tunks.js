import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemon } from "./pokemonSlice"

export const fetchPokemons = (page = 0) => {
   return async (dispatch, getState) => {
      dispatch(startLoadingPokemon());
    //   const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
      const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`); 
      const pokemons = data.results;

      dispatch(setPokemons({pokemons, page}));
   }
}