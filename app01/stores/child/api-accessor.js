import firestore from 'lib/firestore'
import { Child } from 'stores/child/entity'

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

export const addChildApi = async (newChild) => {
  await firestore.collection('children').add(newChild.getApiFmtData())
  .catch(() => { throw 'データの追加に失敗しました。' })
}

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
