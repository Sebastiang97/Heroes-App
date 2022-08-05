import { createSlice } from '@reduxjs/toolkit'

const heoresSlice = createSlice({
  name: 'hero',
  initialState: {
    heroes: [],
    loading: true,
    heroe: {},
  },
  reducers: {
    setHeroes: (state, action) => {
      state.heroes = action.payload.heroes
      state.loading = action.payload.loading
    },
  },
})

export const { setHeroes, findHeroeById } = heoresSlice.actions
export const heroeReducer = heoresSlice.reducer
