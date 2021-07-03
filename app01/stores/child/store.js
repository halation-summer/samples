import reducer from 'stores/child/reducer'
import { createStore } from "redux";

const initialState = {
  children: []
}

const store = createStore(reducer, initialState)
export default store
