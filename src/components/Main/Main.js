import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ShoppingPage from '../ShoppingPage/ShoppingPage'

import './Main.css'

export default function Main () {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([])

  /**
   * Responsible for handling ShoppingItem's 'Add to cart' button clicks,
   * Adds that item to cart,
   * @param {Number} itemID Item's unique id
   * @param {String} image Item's image src
   * @param {String} name Item's name
   * @param {Number} price Item's price
   */
  const onShoppingItemClick = (itemID, image, name, price) => {
    addToCart(itemID, image, name, price)
  }

  /**
   * Adds given item to cart,
   * If the item is already in the card, increase the amout of the item in the cart,
   * @param {Number} itemID Item's unique id
   * @param {String} image Item's image src
   * @param {String} name Item's name
   * @param {Number} price Item's price
   */
  const addToCart = (itemID, image, name, price) => {
    const existingItems = cart.filter(item => item.itemID === itemID)
    if (existingItems.length >= 1) {
      setCart(prevCart => [...prevCart.filter(item => item.itemID !== itemID), {
        itemID: existingItems[0].itemID,
        image: existingItems[0].image,
        name: existingItems[0].name,
        price: existingItems[0].price,
        amount: existingItems[0].amount + 1
      }])
    } else {
      setCart(prevCart => (
        [...prevCart, { itemID, image, name, price, amount: 1 }]
      ))
    }
  }

  /**
   * Increses or decreases the amount of the item in cart
   * @param {Number} itemID Item's id
   * @param {String} action Increase or decrease of the amount
   */
  const onCartItemAmountClick = (itemID, action) => {
    if (action === '+') {
      const item = cart.filter(item => item.itemID === itemID)[0]
      setCart(prevCart => [
        ...prevCart.filter(prevItem => prevItem.itemID !== itemID),
        {
          itemID,
          image: item.image,
          name: item.name,
          price: item.price,
          amount: item.amount + 1
        }
      ])
    } else if (action === '-') {
      const item = cart.filter(item => item.itemID === itemID)[0]
      setCart(prevCart => [
        ...prevCart.filter(prevItem => prevItem.itemID !== itemID),
        {
          itemID,
          image: item.image,
          name: item.name,
          price: item.price,
          amount: (item.amount > 1) ? item.amount - 1 : item.amount
        }
      ])
    } else {
      setCart(prevCart => [
        ...prevCart.filter(item => (item.itemID !== itemID))
      ])
    }
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<ShoppingPage onClick={onShoppingItemClick} />} ></Route>
        <Route path='/cart' element={<Cart cart={cart} onCartItemAmountClick={onCartItemAmountClick} />} ></Route>
      </Routes>
    </main>
  )
}
