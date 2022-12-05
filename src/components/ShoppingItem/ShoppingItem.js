import React from 'react'
import './ShoppingItem.css'
import triangle from '../../assets/triangle.svg'

export default function ShoppingItem () {
  return (
    <div id='shopping-item'>
      <img src={triangle} alt='Item' />
      <span>Name: Item</span>
      <span>Price: £100</span>
      <button type='button'>Add to cart</button>
    </div>
  )
}
