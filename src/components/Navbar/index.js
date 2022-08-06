import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/login'>login</NavLink>
    </>
  )
}
