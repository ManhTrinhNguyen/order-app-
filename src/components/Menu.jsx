
import { useState, useContext } from "react"
import CartItem from "./CartItem"
import { Context } from "../Context"
import Items from "./Items"

function Menu() {
  // name: "Pizza",
  // ingredients: ["pepperoni", "mushrom", "mozarella"],
  // id: 0,
  // price: 14,
  // emoji: "🍕"

  const { menu } = useContext(Context)
  
  const itemInfo = menu.map((item, i) => {
    
    return (
      <Items key={item.id} item={item} />
    )
  })

  return (
    <>
      {itemInfo}
      <CartItem />
    </>
  )
}
export default Menu