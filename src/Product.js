import React from 'react'

export default function Product(props) {
  return (
    <div className='form'>
        
        <div>
            <h3>{props.product}</h3>
            <p>Price : ${props.price}</p>
            <p>Description :{props.desc} </p>
        </div>
    </div>
  )
}
