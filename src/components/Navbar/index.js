import React from 'react'
import { Login } from 'components/Login'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <Login />
    </nav>
  )
}
