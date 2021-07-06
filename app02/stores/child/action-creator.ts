import store from 'stores/child/store'
import api from 'stores/child/api-accessor'
import { Child } from 'stores/child/entity'

export interface SettingAction {
  type: string,
  children: Child[]
}

export const getChildrenAc = async () => {
    const children = await api.getChildrenApi()
    store.dispatch({ type: 'setting', children: [...children] })
}

export const addChildAc = async (newChild: Child) => {
    await api.addChildApi(newChild)
    const children = await api.getChildrenApi()
    store.dispatch({ type: 'setting', children: [...children] })
}

export const deleteChildAc = async (targetChild: Child) => {
    await api.deleteChildApi(targetChild)
    const children = await api.getChildrenApi()
    store.dispatch({ type: 'setting', children: [...children] })
}

