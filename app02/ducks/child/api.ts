import firestore from 'lib/firestore'
import { Child, SuperChild } from 'ducks/child/entity'

export const getChildren = async () => {
  const querySnapshot = await firestore.collection('children').orderBy('timestamp', 'asc').get()
  let children: Child[] = []
  querySnapshot.forEach(doc => {
    const newChild = {
      kanji: doc.data().kanji,
      kana: doc.data().kana,
      sex: doc.data().sex,
      id: doc.id,
      timestamp: doc.data().timestamp,
    }
    children.push(newChild)
  })
  return children
}

export const addChild = async (newChild: Child) => {
  const docRef = await firestore.collection('children').add(SuperChild.factory(newChild).getOutput())
  return docRef.id
}

export const deleteChild = async (targetChild: Child) => {
  const result = await firestore.collection('children').doc(targetChild.id).delete()
  return result
}
