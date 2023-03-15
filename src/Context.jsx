import React, { useEffect, useState } from "react"
import data from "./data"

const Context = React.createContext()

function ContextProvider(props) {
  const [menu, setMenu] = useState([])
  const [addPizza, setAddPizza] = useState(false)
  const [addHamBur, setAddHamBur] = useState(false)
  const [addBeer, setAddBeer] = useState(false)

  useEffect(() => {
    setMenu(data)
  }, [])

  function addToCart(name) {
    if (name === "Pizza") {
      setAddPizza(true)
    } else if (name === "Hamburger") {
      setAddHamBur(true)
    } else if (name === "Beer") {
      setAddBeer(true)
    }
  }

  return (
    <Context.Provider value={{ menu, addToCart, addPizza, addHamBur, addBeer}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context} 