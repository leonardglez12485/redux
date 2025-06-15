import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 1,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemon: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
            state.isLoading = false;
        },
    }
})


export const { startLoadingPokemon, setPokemons } = pokemonSlice.actions