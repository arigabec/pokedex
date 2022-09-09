import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import counterReducer from './counter/counterSlice'
import pokedexReducer from './pokedex/pokedexSlice' 

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokedex: pokedexReducer,
    auth: authReducer
  }
})