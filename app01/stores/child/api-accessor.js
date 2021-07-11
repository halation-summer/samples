import firestore from 'lib/firestore'
import { Child } from 'stores/child/entity'

// 子供データの取得
export const getChildrenApi = async () => {
  const querySnapshot = await firestore.collection('children').orderBy('date', 'asc').get()
  .catch(() => { throw 'データの取得に失敗しました。' })
  let children = []
  querySnapshot.forEach(doc => {
    const newChild = Child.createIns({
      kanji: doc.data().kanji,
      kana: doc.data().kana,
      sex: doc.data().sex,
      id: doc.id,
      date: doc.data().date,
    })
    children.push(newChild)
  })
  return children
}

// 子供データの追加
export const addChildApi = async (newChild) => {
  await firestore.collection('children').add(newChild.getApiFmtData())
  .catch(() => { throw 'データの追加に失敗しました。' })
}

// 子供データの削除
export const deleteChildApi = async (targetChild) => {
  await firestore.collection('children').doc(targetChild.id).delete()
  .catch(() => { throw 'データの削除に失敗しました。' })
}

export default {
  getChildrenApi,
  addChildApi,
  deleteChildApi,
}

/* for test */
// function getRejection() {
//   return Promise.reject()
// }
