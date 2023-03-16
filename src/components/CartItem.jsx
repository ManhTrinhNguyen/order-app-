import { useContext, useEffect, useState } from "react"
import { Context } from "../Context"


function CartItem() {

  const { newCart, itemPrice } = useContext(Context)

// get Total Price
  function totalPrice() {
    let total = 0
    for (let i = 0; i < itemPrice.length; i++) {
      total = itemPrice[i] + total
    }
    return total
  }

  return (
    <>
      <div className="cart-container">
      <h2>Your Order</h2>
        {newCart.map(item => {
          return (
            <div className="item-container" key={item.id}>
              <h4>{item.name}</h4>
              <button>remove</button>
              <span>${item.price}</span>
            </div>
          )
        })}
       
           <div className="total-price-container">
              <h4>Total price :</h4>
          <span>${ totalPrice() }</span>
          </div>
   
       
        <button className="cart-btn">Complete Order</button>
      </div>
    </>
  )
}

export default CartItem