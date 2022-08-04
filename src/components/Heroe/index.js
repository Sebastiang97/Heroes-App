import React from 'react'
import { Link } from 'react-router-dom'

export const Heroe = ({ name, id, url, description, resourceURI }) => {
  return (
    <Link to={`/heroe/${id}`} className='Heroe'>
      <h4>{name}</h4>
      {/* <p>{description}</p> */}
      <small>{resourceURI}</small>
      <img loading='lazy' src={url} alt={name} />
    </Link>
  )
}
