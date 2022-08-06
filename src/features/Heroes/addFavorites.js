import { database } from 'dataFirebase/config'
import { collection, doc, setDoc } from 'firebase/firestore'

export const addFavorites = (hero) => {
  return async (dispatch, getState) => {
    // dispatch(signIn(result))

    const { user } = getState().auth

    console.log({ user, hero })

    const newDoc = doc(collection(database, `${user.uid}/HeroesApi/Heroes`))
    const res = await setDoc(newDoc, hero)
    console.log({ newDoc, res })
  }
}
