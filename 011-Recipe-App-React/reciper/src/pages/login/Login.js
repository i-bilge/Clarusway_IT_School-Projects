import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.scss'

function Login({ getName, Name, updateName}) {
    let navigate = useNavigate();
  return (
    <div className='loginContainer'>
      <h1>LOGIN</h1>
      <form onSubmit={getName} className="loginForm">
        <input
            className="loginBar"
            type="text"
            value={Name}
            onChange={updateName}
            placeholder="Your Name Please..."
        /> <br/>
        <input
            className="loginBar"
            type="password"
            placeholder='Give Us Your Lucky Number...'
        /><br/>
        <button className="searchBtn" type="submit">
            LOGIN
        </button>
      </form>

      <footer>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </footer>
    </div>
  )
}

export default Login