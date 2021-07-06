const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'setting':
      return { children: action.children }
  }
  return state
}
export default reducer
