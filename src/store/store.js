import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import counterReducer from './counter/counterSlice'
import pokedexReducer from './pokedex/pokedexSlice'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokedex: pokedexReducer,
    auth: persistedReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware ({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})