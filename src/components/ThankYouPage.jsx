import React,{useContext} from 'react'
import { Context } from '../Context'
function ThankYouPage() {
  const {getInfo} = useContext(Context)
  return (
    <div className='thankyou-container'>
      <h3>{`Thanks ${getInfo.name}!, your order is on its way!`}</h3>
    </div>
  )
}

export default ThankYouPage