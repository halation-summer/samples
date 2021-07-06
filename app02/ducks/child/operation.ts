import store from 'ducks/store'
import * as api from 'ducks/child/api'
import { Child } from 'ducks/child/entity'
import slice from 'ducks/child/slice'

export const getChildren = async () => {
    const children = await api.getChildren()
    const action = slice.actions.setChildren(children)
    store.dispatch(action)
}

export const addChild = async (newChild: Child) => {
    await api.addChild(newChild)
    const children = await api.getChildren()
    const action = slice.actions.setChildren(children)
    store.dispatch(action)
}

export const deleteChild = async (targetChild: Child) => {
    await api.deleteChild(targetChild)
    const children = await api.getChildren()
    const action = slice.actions.setChildren(children)
    store.dispatch(action)
}
