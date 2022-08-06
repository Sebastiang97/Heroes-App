import { database } from 'dataFirebase/config'
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { deleteFavHeroes } from '.'

export const deleteHeroe = (id) => {
  return async (dispatch, getState) => {
    // dispatch(signIn(result))

    const { user } = getState().auth

    console.log({ user, id })

    const ref = doc(database, `${user.uid}/HeroesApi/Heroes/${id}`)
    const res = await deleteDoc(ref)
    dispatch(deleteFavHeroes(id))
  }
}
