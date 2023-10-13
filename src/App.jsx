import React, { useState } from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import './App.css'

import { Route, Routes, Link } from "react-router-dom";
import Cart from './Components/Cart';
// import Home from "./components/Home";


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const handleLogin = () => {
    // Perform validation here (e.g., check if fields are not empty)
    if (username && password ) {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }

 
const products = [
  { id: 1, name: 'Product 1', description: 'Product 1 description' },
  { id: 2, name: 'Product 2', description: 'Product 2 description' },
  { id: 3, name: 'Product 3', description: 'Product 3 description' },
];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productToRemove.id);
    setCartItems(updatedCartItems);
  };
  



  return (
    <div className="App">

      {loggedIn ? (

        // <Home onLogout={() => setLoggedIn(false)} />
        <Routes>
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />}/>
        <Route path="/" element={<Home addToCart={addToCart} onLogout={() => setLoggedIn(false)}/>}/>
        </Routes>      
        ) : (
        <Login
          username={username}
          password={password}
          onUsernameChange={(e) => setUsername(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onLogin={handleLogin}
        />
      )}
      </div>

  );
}




export default App;
