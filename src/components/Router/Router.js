import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ShoppingPage from '../ShoppingPage/ShoppingPage'

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<ShoppingPage />} ></Route>
      <Route path='/cart' element={<Cart />} ></Route>
    </Routes>
  )
}
