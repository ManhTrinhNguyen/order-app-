import React, {useContext} from 'react'
import { useState } from 'react'
import { Context } from '../Context'

export default function Items(props) {

  const { addToCart, newCart } = useContext(Context)


  // Disable the Btn when it already  in the cart
  function disableBtn() {
    const alreadyInCart = newCart.some(element => {
      return element.id === props.item.id
    })
    if (alreadyInCart) {
      return true
    } else {
      return false
    }
  }
  
  return (
      <div className="menu-container">
        <div className="emoji">{props.item.emoji}</div>
        <div className="item-info">
          <h3 className="item-name">{props.item.name}</h3>
          <p className="item-ingreidents">{props.item.ingredients}</p>
          <h5 className="item-price">{`$${props.item.price}`}</h5>
        </div>
      <button onClick={() => {
        addToCart(props.item.id)
      }} className="item-btn" disabled={disableBtn()}>+</button>
      </div>
  )
}
