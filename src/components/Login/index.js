import React from 'react'
import { logout, signInWithGoogle } from 'features/auth/'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllHeroesFav } from 'features/Heroes'

export const Login = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => state)
  const { logged, user } = auth

  const handleLogin = () => {
    dispatch(signInWithGoogle())
  }

  const handleLogout = () => {
    dispatch(deleteAllHeroesFav())
    dispatch(logout())
  }

  return (
    <>
      {logged ? (
        <>
          <a className='perfil'>{user.displayName}</a>
          <a onClick={handleLogout}>logout </a>
        </>
      ) : (
        <a onClick={handleLogin}>Google</a>
      )}
    </>
  )
}
