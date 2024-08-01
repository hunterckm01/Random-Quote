import React, { useContext } from 'react'
import { MyContext } from '../ContextApi/MyContext'

const CardsQuotes = () => {
    
  const {quote} = useContext(MyContext);

  return (
    <div>
      <div className=''>{quote}</div>
    </div>
  )
}

export default CardsQuotes