import { ListHeroes } from 'components/ListHeroes'
import { useCharacters } from 'hooks/useCharacters'
import React from 'react'
import { useParams } from 'react-router-dom'

export const Search = () => {
  const { search = '' } = useParams()
  const { heroes } = useCharacters({ search })

  return <ListHeroes heroes={heroes} />
}
