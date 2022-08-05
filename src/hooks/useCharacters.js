import { useEffect } from 'react'
import getAllHeroes from 'services/getAllHeroes'
import { useDispatch, useSelector } from 'react-redux'
import { setHeroes } from 'features/Heroes'

export const useCharacters = ({ search }) => {
  const dispatch = useDispatch()
  const { heroes } = useSelector((state) => state)

  // const [heroes, setHeroes] = useState({
  //   heroes: [],
  //   loading: true,
  // })

  useEffect(() => {
    getAllHeroes({ search }).then((heroes) => {
      dispatch(
        setHeroes({
          heroes,
          loading: false,
        })
      )
    })
  }, [search, dispatch])
  return { heroes }
}
