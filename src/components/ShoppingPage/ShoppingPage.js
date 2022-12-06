import React from 'react'
import ShoppingItem from '../ShoppingItem/ShoppingItem'

import './ShoppingPage.css'

import triangle from '../../assets/triangle.svg'
import eightPointStar from '../../assets/eightPointStar.svg'
import circle from '../../assets/circle.svg'
import octagon from '../../assets/octagon.svg'
import rectangle from '../../assets/rectangle.svg'
import rhombus from '../../assets/rhombus.svg'
import square from '../../assets/square.svg'
import star from '../../assets/star.svg'

export default function ShoppingPage () {
  return (
    <div id='shopping-page'>
      <ShoppingItem itemID={0} image={triangle} name='Triangle' price={300} onClick={(id) => {}} ></ShoppingItem>
      <ShoppingItem itemID={1} image={star} name='Star' price={1000} onClick={(id) => {}} ></ShoppingItem>
      <ShoppingItem itemID={2} image={eightPointStar} name='Eight Point Star' price={1600} onClick={(id) => {}} ></ShoppingItem>
      <ShoppingItem itemID={3} image={rhombus} name='Rhombus' price={400} onClick={(id) => {}} ></ShoppingItem>
      <ShoppingItem itemID={4} image={square} name='square' price={400} onClick={(id) => {}} ></ShoppingItem>
      <ShoppingItem itemID={5} image={rectangle} name='Rectangle' price={400} onClick={(id) => {}} ></ShoppingItem>
      <ShoppingItem itemID={6} image={octagon} name='Octagon' price={800} onClick={(id) => {}} ></ShoppingItem>
      <ShoppingItem itemID={7} image={circle} name='Circle' price={0} onClick={(id) => {}} ></ShoppingItem>
    </div>
  )
}
