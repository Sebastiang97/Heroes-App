import { createSlice } from '@reduxjs/toolkit'

const heoresSlice = createSlice({
  name: 'hero',
  initialState: {
    heroes: [],
    loading: true,
    heroesFav: [],
  },
  reducers: {
    setHeroes: (state, action) => {
      state.heroes = action.payload.heroes
      state.loading = action.payload.loading
    },
    setFavHeroes: (state, action) => {
      console.log(action.payload)
      state.heroesFav = action.payload
    },
    deleteFavHeroes: (state, action) => {
      state.heroesFav = state.heroesFav.filter(
        (heroe) => heroe.id !== action.payload
      )
    },
  },
})

export const { setHeroes, setFavHeroes, deleteFavHeroes } = heoresSlice.actions
export const heroeReducer = heoresSlice.reducer
