import React from 'react'
import PropTypes from 'prop-types'

import './Cart.css'
import CartItem from '../CartItem/CartItem'

export default function Cart ({
  cart,
  onCartItemAmountClick
}) {
  cart = [...cart].sort((prevItem, currentItem) => (
    prevItem.itemID - currentItem.itemID
  ))
  const cartItems = cart.map(item => (
    <CartItem
      key={item.itemID}
      itemID={item.itemID}
      image={item.image}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onCartItemAmountClick={onCartItemAmountClick}
    ></CartItem>
  ))

  const calcPrice = () => {
    if (cart.length === 0) { return 0 }

    let totalPrice = 0
    for (let i = 0; i < cart.length; i++) {
      totalPrice += (cart[i].price * cart[i].amount)
    }

    return totalPrice
  }

  return (
    <>
      <div id='cart'>
        {cartItems}
      </div>
      <span className='total-price'>{`Total price is £${calcPrice()}`}</span>
    </>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  onCartItemAmountClick: PropTypes.func.isRequired
}
