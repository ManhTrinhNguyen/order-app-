import data from "../data"
import { useState } from "react"
function Menu() {
  // name: "Pizza",
  // ingredients: ["pepperoni", "mushrom", "mozarella"],
  // id: 0,
  // price: 14,
  // emoji: "🍕"
  const [itemName, setItemName] = useState("")

  const itemInfo = data.map(({ name, ingredients, price, emoji, id }) => {
    return (
      <div key={id} className="menu-container">
        <div className="emoji">{emoji}</div>
        <div className="item-info">
          <h3 className="item-name">{name}</h3>
          <p className="item-ingreidents">{ingredients}</p>
          <h5 className="item-price">{`$${price}`}</h5>
        </div>
        <button className="item-btn">+</button>
      </div>
    )
  })


  return (
    <>
      {itemInfo}
    </>
  )
}
export default Menu