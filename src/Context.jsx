import React, { useEffect, useState } from "react"
import data from "./data"

const Context = React.createContext()

function ContextProvider(props) {
  const [menu, setMenu] = useState([])
  const [newCart, setNewCart] = useState([])
  const [isPlaceOrder, setIsPlaceOrder] = useState(false)
  const [getInfo, setGetInfo] = useState({
    name: "",
    cardNumber: "",
    cvvNumber : ""
  })
  const [isPay, setIsPay] = useState(false)

  useEffect(() => {
    setMenu(data)
  }, [])

  // Aadd to Cart

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
  // Remove from Cart

  function removeFromCart(id) {
   setNewCart(prevItems => prevItems.filter(item => item.id !== id))
  }

  // Place Order

  function placeOrder() {
    setIsPlaceOrder(true)
  }

  // Enter Card Detail Form 


  function handleChange(e) {
    const {name, value} = e.target
    setGetInfo(prevValue => {
      return {
        ...prevValue,
        [name] : value
      }
    })
  }

  function handleClick(e) {
    e.preventDefault()
    if (getInfo.name.length == 0 || getInfo.cardNumber.length == 0 || getInfo.cvvNumber.length == 0) {
      alert("Your info need to fill in")
    } else {
      setIsPay(true)
    }
  }



  return (
    <Context.Provider value={{menu, addToCart, newCart, removeFromCart, placeOrder, isPlaceOrder, handleChange, handleClick, getInfo, isPay}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context} 