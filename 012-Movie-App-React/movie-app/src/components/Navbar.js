import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Login from './Login';
import Main from './Main';
import Register from './Register';

function Navbar() {
  return (
    <>
    <nav>
      <ul>
          <Link className='Links' to='/'>REACT MOVIE APP</Link>
          <Link className='Links' to='/login'>Login</Link>
          <Link className='Links' to='/register'>Register</Link>
      </ul>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </nav>  
    </>
  )
}

export default Navbar