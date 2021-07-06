import { RootState } from 'ducks/store'

export const selectChildren = (state: RootState) => {
  return state.children
}
