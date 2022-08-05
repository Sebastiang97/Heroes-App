import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from 'pages/Home'
import { Search } from 'pages/Search'
import { Details } from 'pages/Details'
import { Navbar } from 'components/Navbar'
import { SearchResults } from 'components/SearchResults'
import { Login } from 'pages/Login'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <SearchResults />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search/:search' element={<Search />} />
        <Route path='/heroe/:id' element={<Details />} />
        <Route path='*' element={<h4>No encontrado</h4>} />
      </Routes>
    </>
  )
}
