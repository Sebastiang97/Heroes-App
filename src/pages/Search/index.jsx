import { ListHeroes } from 'components/ListHeroes'
import { useCharacters } from 'hooks/useCharacters'
import React from 'react'

export const Search = () => {
  const { heroes } = useCharacters({})

  return <ListHeroes heroes={heroes} />
}
