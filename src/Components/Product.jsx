import React, { useRef } from 'react'
import './styles/Product.css'


const Product = ({ id, fname, price, addToCart, icon }) => {
  return (
    <div className='card'>
      <div className="img-container">
        <img src={icon} alt=""  />
      </div>
      <h2>{fname}</h2>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart({ id, fname, price })}>
        Add to Cart
      </button>
    </div>

  )
}

export default Product

