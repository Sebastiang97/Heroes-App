import { Heroe } from 'components/Heroe'
import { Loading } from 'components/Loading'
import React from 'react'

export const ListHeroes = ({ heroes }) => {
  if (heroes.loading) return <Loading />
  return (
    <section className='Heores-content'>
      {heroes.heroes.length !== 0 &&
        heroes.heroes.map(({ name, id, url, description, resourceURI }) => (
          <Heroe
            description={description}
            id={id}
            key={id}
            name={name}
            resourceURI={resourceURI}
            url={url}
          />
        ))}
    </section>
  )
}
