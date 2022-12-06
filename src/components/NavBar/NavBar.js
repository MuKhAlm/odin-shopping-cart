import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

export default function NavBar () {
  return (
    <div id='nav-bar'>
      <Link to={'/'}>Shopping</Link>
      <span>Cart</span>
    </div>
  )
}
