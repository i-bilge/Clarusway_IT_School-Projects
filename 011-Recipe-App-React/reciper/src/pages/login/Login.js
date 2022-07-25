import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
import './Login.scss'

function Login({ getName, Name, updateName}) {
    let navigate = useNavigate();

  return(
    <div className='loginContainer'>
       <h1>LOGIN</h1>
       <form onSubmit={getName} className="loginForm">
       <label htmlFor='name'>Name</label>
        <input
            className="loginBar"
            type="text"
            name = "Name"
            value={Name}
            placeholder="Your Name Please..."
        /> 
        <br/>
        <label htmlFor='password'>Password</label>
        <input
            className="loginBar"
            type="password"
            placeholder='Give Us Your Lucky Number...'
        /><br/>
        <button className="searchBtn" type="submit" onClick={ () => navigate("/", {state: {Name}})}>
            LOGIN
        </button>
      </form>

      <br/><br/>  

      <footer>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </footer>
    </div>

    
  )
}

export default Login