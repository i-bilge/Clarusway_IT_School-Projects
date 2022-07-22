import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate();
  return (
    <div>
        <p>Login</p>
        <button onClick={() => navigate("/about")}>MORE</button>
    </div>
  )
}

export default Login