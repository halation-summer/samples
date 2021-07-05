import firestore from 'lib/firestore'
import { Child } from 'stores/child/entity'

export const getChildrenApi = async () => {
  const querySnapshot = await firestore.collection('children').orderBy('date', 'asc').get()
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
  const docRef = await firestore.collection('children').add(newChild.getApiFmtData())
  return docRef.id
}

export const deleteChildApi = async (targetChild) => {
  const result = await firestore.collection('children').doc(targetChild.id).delete()
  return result
}

export default {
  getChildrenApi,
  addChildApi,
  deleteChildApi,
}
