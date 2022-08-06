import { addFavorites } from 'features/Heroes/addFavorites'
import { deleteHeroe } from 'features/Heroes/deleteHeroe'
import { getHeroesFav } from 'features/Heroes/getHeroesFav'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export const Heroe = ({ name, id, url, description, resourceURI }) => {
  const [hero, sethero] = useState({ name, id, url, description, resourceURI })
  const dispath = useDispatch()

  const handleFavorites = (hero) => {
    //dispath(addFavorites(hero))
    //dispath(getHeroesFav())
    //dispath(deleteHeroe('1lV90RM66KZJgvEf6ei9'))
  }

  return (
    <div className='Heroe'>
      <Link to={`/heroe/${id}`}>
        {/* <p>{description}</p> */}
        <img loading='lazy' src={url} alt={name} />
        <div className='name'>{name}</div>
        <div className='caption'>
          <h3>Marvel Commics</h3>
        </div>

        {/* ❌ */}
      </Link>
      <div onClick={() => handleFavorites(hero)} className='btn-fav'>
        <div className='fav'>💗</div>
      </div>
    </div>
  )
}
