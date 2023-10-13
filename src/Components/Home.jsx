import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import './Styles/Home.css'
import { NavbarLink } from './styles/Styles';
import {SiCarto} from "react-icons/si"

const Home = ({ addToCart,onLogout}) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavbarLink to="/" >Home</NavbarLink>
                    </li>
                    <li>
                        <NavbarLink to="/cart">Cart  <SiCarto /> </NavbarLink>
                       
                    </li>
                    
                    </ul>
                <button onClick={onLogout}>LogOut</button>
            </nav>
          
                <h1>Simple Shopping Cart</h1>
                <div className="card-container">
                <Product id={1} icon="https://www.goodreturns.in/img/2014/12/29-1419829109-online-600.jpg" fname="Product 1" price={10} addToCart={addToCart} />
                <Product id={2} icon="https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942406_960_720.jpg" fname="Product 2" price={20} addToCart={addToCart} />
                <Product id={3} icon="https://www.goodreturns.in/img/2014/12/29-1419829109-online-600.jpg" fname="Product 3" price={40} addToCart={addToCart} />
                
                </div>
                



        </div>
    )
}

export default Home


