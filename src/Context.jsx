import React, { useEffect, useState } from "react"
import data from "./data"

const Context = React.createContext()

function ContextProvider(props) {
  const [menu, setMenu] = useState([])
  const [newCart, setNewCart] = useState([])
  const [itemPrice, setItemPrice] = useState([])

  useEffect(() => {
    setMenu(data)
  }, [])

  function addToCart(id) {
    menu.map(item => {
      if (id === item.id) {
        return setNewCart(prevItem => {
          return [
            ...prevItem,
            item
          ]
        })
      }
    })
  }

  function getPriceItem(id) {
    menu.map(item => {
      if (id === item.id) {
        return setItemPrice(prevItem => {
          return [
            ...prevItem,
            item.price
          ]
        })
      }
    })
  }


  return (
    <Context.Provider value={{menu, addToCart, newCart, getPriceItem, itemPrice}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context} 