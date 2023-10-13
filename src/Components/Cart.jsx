import React from 'react'
import {NavbarLink} from "./styles/Styles"
import './styles/Cart.css'

const Cart = ({ cartItems,onRemoveFromCart  }) => {
  return (
    <div className='cart-container'>
        <nav className='c-nav'>
            <NavbarLink to='/'>Go Home</NavbarLink>
        </nav>
        <h2>Cart</h2>
    <ul>
      {cartItems.map((item) => (
        
        <li key={item.id}>
        
          {item.fname} - Rs-{item.price}  
          <button onClick={() => onRemoveFromCart(item)}>Remove</button>
          
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Cart