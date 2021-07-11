import store from 'stores/child/store'
import api from 'stores/child/api-accessor'

// 子供データの取得
export const getChildrenAc = async () => {
    const children = await api.getChildrenApi()
    store.dispatch({ type: 'setAction', children: [...children] })
}

// 子供データの追加
export const addChildAc = async newChild => {
    await api.addChildApi(newChild)
    const children = await api.getChildrenApi()
    store.dispatch({ type: 'setAction', children: [...children] })
}

// 子供データの削除
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
