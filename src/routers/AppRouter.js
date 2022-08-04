import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from 'pages/Home'
import { Search } from 'pages/Search'
import { Details } from 'pages/Details'

export const AppRouter = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/heroe/1011334'>Home</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:search' element={<Search />} />
        <Route path='/heroe/:id' element={<Details />} />
        <Route path='*' element={<h4>No encontrado</h4>} />
      </Routes>
    </>
  )
}
