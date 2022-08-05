import React from 'react'
import { Link } from 'react-router-dom'

export const Heroe = ({ name, id, url, description, resourceURI }) => {
  return (
    <Link to={`/heroe/${id}`} className='Heroe'>
      {/* <p>{description}</p> */}
      <img loading='lazy' src={url} alt={name} />
      <div className='name'>{name}</div>
      <div className='caption'>
        <h3>Marvel Commics</h3>
      </div>
    </Link>
  )
}
