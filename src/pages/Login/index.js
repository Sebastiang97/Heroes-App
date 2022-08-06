import { logout, signInWithGoogle } from 'features/auth/'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Login = () => {
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(signInWithGoogle())
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <button onClick={handleLogin}>Google</button>
      <button onClick={handleLogout}>logout </button>
    </>
  )
}
