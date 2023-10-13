import React from 'react'
import './Styles/Login.css'


const Login = ({ username, password, onUsernameChange, onPasswordChange, onLogin }) => {
  return (
    <div className='Box'>
      <h2>Login Page</h2>
      <div className='Box1'>
        <label>Username:</label>
        <input type="text" value={username} onChange={onUsernameChange} />
      </div>
      <div className='box2'>
        <label>Password:</label>
        <input type="password" value={password} onChange={onPasswordChange}/>
      </div>
      <button onClick={onLogin}>Sign In</button>

    </div>
  )
}

export default Login
