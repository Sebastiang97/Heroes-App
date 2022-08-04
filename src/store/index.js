import { configureStore } from '@reduxjs/toolkit'
import { heroeReducer } from 'features/Heroes'

const store = configureStore({
  reducer: {
    heroes: heroeReducer,
  },
})

export default store
