import React from 'react'
import PropTypes from 'prop-types'

import './ShoppingItem.css'

export default function ShoppingItem ({
  itemID,
  image,
  name,
  price,
  onClick
}) {
  return (
    <div id='shopping-item'>
      <img src={image} alt='Item' />
      <span>{`Name: ${name}`}</span>
      <span>{`Price: £${price}`}</span>
      <button type='button' onClick={e => onClick(itemID, image, name, price)}>Add to cart</button>
    </div>
  )
}

ShoppingItem.propTypes = {
  itemID: PropTypes.number.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
