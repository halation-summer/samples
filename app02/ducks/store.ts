import { configureStore } from '@reduxjs/toolkit'
import childSlice from 'ducks/child/slice'

const store = configureStore({
  reducer: childSlice.reducer,
})

export type RootState = ReturnType<typeof store.getState>

export default store
