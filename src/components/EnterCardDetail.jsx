import React, { useContext } from 'react'
import { Context } from '../Context'
function EnterCardDetail() {

  const { handleChange, handleClick, getInfo, isFillInfo } = useContext(Context)
  return (
    <div className='card-detail-container'>
      <form>
         <h3>Enter card details</h3>
        <input onChange={handleChange} value={getInfo.name} type="text" name="name" placeholder='Enter your name' required />
        <input onChange={handleChange} value={getInfo.cardNumber} type="text" name='cardNumber' placeholder='Enter your number' required/>
        <input onChange={handleChange} value={getInfo.cvvNumber} type="text" name='cvvNumber' placeholder='Enter CVV' required/>
        <button onClick={handleClick}>Pay</button>
      </form>
    </div>
  )
}

export default EnterCardDetail