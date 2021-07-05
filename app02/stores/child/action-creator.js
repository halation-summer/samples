import store from 'stores/child/store'
import api from 'stores/child/api-accessor'

export const getChildrenAc = async () => {
    const children = await api.getChildrenApi()
    store.dispatch({ type: 'setAction', children: [...children] })
}

export const addChildAc = async newChild => {
    await api.addChildApi(newChild)
    const children = await api.getChildrenApi()
    store.dispatch({ type: 'setAction', children: [...children] })
}

export const deleteChildAc = async targetChild => {
    await api.deleteChildApi(targetChild)
    const children = await api.getChildrenApi()
    store.dispatch({ type: 'setAction', children: [...children] })
}

export default {
  getChildrenAc,
  addChildAc,
  deleteChildAc
}
