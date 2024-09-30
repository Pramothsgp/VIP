import React from 'react'
import './Card.css';
const Card = ({display ,children}) => {
  return (
    <div className='card' onClick={() => { display((prev) => !prev) }}>
          {children}
    </div>
  )
}

export default Card