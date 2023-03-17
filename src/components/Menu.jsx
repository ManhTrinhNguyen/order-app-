
import { useContext } from "react"
import CartItem from "./CartItem"
import { Context } from "../Context"
import Items from "./Items"

function Menu() {
  const { menu, newCart, isPay } = useContext(Context)
 
  const itemInfo = menu.map((item, i) => {
    
    return (
      <Items key={item.id} item={item} />
    )
  })

  return (
    <>
      {itemInfo}
      {isPay ? "" : newCart.length > 0 && <CartItem />}
      
    </>
  )
}
export default Menu