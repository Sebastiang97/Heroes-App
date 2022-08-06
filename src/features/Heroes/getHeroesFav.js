import { database } from 'dataFirebase/config'
import { collection, getDocs } from 'firebase/firestore'
import { setFavHeroes } from '.'

export const getHeroesFav = (hero) => {
  return async (dispatch, getState) => {
    // dispatch(signIn(result))

    const { user } = getState().auth

    const ref = collection(database, `${user.uid}/HeroesApi/Heroes`)

    const docs = await getDocs(ref)

    const heroesFav = []

    docs.forEach((doc) => {
      heroesFav.push({ id: doc.id, heroe: doc.data() })
    })

    dispatch(setFavHeroes(heroesFav))
  }
}
