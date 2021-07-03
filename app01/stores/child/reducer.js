const reducer = (state, action) => {
  switch (action.type) {
    case 'setAction':
      return { children: action.children }
  }
  return state
}
export default reducer
