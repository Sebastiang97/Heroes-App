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

    // findHeroeById: (state, action) => {
    //   state.heroe = {}
    //   console.log(state.heroes)
    //   state.heroes.map((heroe) => {
    //     if (heroe.id === action.payload.id) {
    //       state.heroe.name = heroe.name
    //       state.heroe.id = heroe.id
    //       state.heroe.description = heroe.description
    //     }
    //   })
    // },
  },
})

export const { setHeroes, findHeroeById } = heoresSlice.actions
export const heroeReducer = heoresSlice.reducer
