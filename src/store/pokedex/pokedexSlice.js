import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  pokemon: {}
}

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    isLoading: (state) => {
      state.isLoading = !state.isLoading
    },
    pokemon: (state, action) => {
      state.pokemon = action.payload
    }
  },
})

export const { isLoading, pokemon } = pokedexSlice.actions

export default pokedexSlice.reducer