import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ShoppingPage from '../ShoppingPage/ShoppingPage'

import './Main.css'

export default function Main () {
  // eslint-disable-next-line no-unused-vars
  const { cart, setCart } = useState([])

  return (
    <main>
      <Routes>
        <Route path='/' element={<ShoppingPage />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
      </Routes>
    </main>
  )
}
