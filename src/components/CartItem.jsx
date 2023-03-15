import { useContext } from "react"
import { Context } from "../Context"


function CartItem() {

  const { menu, addPizza, addBeer, addHamBur } = useContext(Context)
  const beer = menu.map(item => {
    if (item.name === "Beer") {
     return item.name
   }
  })

  const pizza = menu.map(item => {
    if (item.name === "Pizza") {
     return item.name
   }
  })

  const ham = menu.map(item => {
    if (item.name === "Hamburger") {
     return item.name
   }
  })
  return (
    <>
      <div>
        {addPizza && <h1>{pizza}</h1>}
        {addHamBur && <h1>{ham}</h1>}        
        {addBeer && <h1>{beer}</h1>}
      </div>
    </>
  )
}

export default CartItem