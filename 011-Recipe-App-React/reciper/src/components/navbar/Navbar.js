import React from 'react'
import './Navbar.scss';
// import About from '../../pages/about/About';
// import Details from '../../pages/details/Details';
// import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
        <a href='/menu'>RECIPER</a>
        <a href='details'>Detail</a>
        <a href='/about'>About</a>
    </div>
  )
}
export default NavBar