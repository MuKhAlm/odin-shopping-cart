import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ShoppingPage from '../ShoppingPage/ShoppingPage'

import './Main.css'

export default function Main () {
  return (
    <main>
      <Routes>
        <Route path='/' element={<ShoppingPage />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
      </Routes>
    </main>
  )
}
