import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findHeroeById } from 'features/Heroes'
import { Heroe } from 'components/Heroe'
import getDetailsHero from 'services/getDetailsHero'

export const Details = () => {
  const { heroes } = useSelector((state) => state.heroes)
  const { id } = useParams()
  const [heroe, setHeroe] = useState({})
  useEffect(() => {
    if (heroes.length !== 0) {
      heroes.map((heroe) => heroe.id === parseInt(id) && setHeroe(heroe))
    } else {
      getDetailsHero({ id }).then((heroe) => setHeroe(heroe))
    }
    console.log(heroe)
  }, [id])

  return (
    <>
      <Heroe
        description={heroe?.description}
        id={heroe?.id}
        key={heroe?.id}
        name={heroe?.name}
        resourceURI={heroe?.resourceURI}
        url={heroe?.url}
      />
    </>
  )
}
