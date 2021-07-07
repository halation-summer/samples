import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Child } from 'ducks/child/entity'

interface ChildState {
  children: Child[]
}

const initialState: ChildState = {
  children: []
}

const slice = createSlice({
  name: 'child',
  initialState,
  reducers: {
    setChildren(state, action: PayloadAction<Child[]>) {
      state.children = action.payload
    },
  },
})

export default slice
