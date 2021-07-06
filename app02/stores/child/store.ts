import reducer from 'stores/child/reducer'
import { Child } from 'stores/child/entity'
import { createStore } from "redux";

export interface RootState {
  children: Child[]
}

const initialState: RootState = {
  children: []
}

const store = createStore(reducer, initialState)
export default store
