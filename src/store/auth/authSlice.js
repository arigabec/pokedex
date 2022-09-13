import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isAuth: false,
  user: null,
  date: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLoading: (state) => {
      state.isLoading = !state.isLoading
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.date = new Date();
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      state.date = null;
    }
  },
})

export const { isLoading, setUser, logout } = authSlice.actions

export default authSlice.reducer