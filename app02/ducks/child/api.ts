import firestore from 'lib/firestore'
import { Child } from 'ducks/child/entity'

export const getChildren = async () => {
  const querySnapshot = await firestore.collection('children').orderBy('date', 'asc').get()
  let children: Child[] = []
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

export const addChild = async (newChild: Child) => {
  const docRef = await firestore.collection('children').add(newChild.getOutput())
  return docRef.id
}

export const deleteChild = async (targetChild: Child) => {
  const result = await firestore.collection('children').doc(targetChild.id).delete()
  return result
}
