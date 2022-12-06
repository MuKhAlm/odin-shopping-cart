import React from 'react'
import PropTypes from 'prop-types'

import './CartItem.css'

export default function CartItem ({
  itemID,
  image,
  name,
  price,
  amount,
  onCartItemAmountClick
}) {
  return (
    <div id='cart-item'>
      <img src={image} alt='Item' />
      <span>{`Name: ${name}`}</span>
      <span>{`Price: £${price}`}</span>
      <div className='amount'>
        <span>{amount}</span>
        <span>
          <button onClick={e => {
            onCartItemAmountClick(itemID, '+')
          }} >+</button>
        </span>
        <span>
          <button onClick={e => {
            onCartItemAmountClick(itemID, '-')
          }} >-</button>
        </span>
        <span>
          <button onClick={e => {
            onCartItemAmountClick(itemID, 'x')
          }} >x</button>
        </span>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  itemID: PropTypes.number.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  onCartItemAmountClick: PropTypes.func.isRequired
}
