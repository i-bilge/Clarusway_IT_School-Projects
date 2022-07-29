import React from 'react'
import Navbar from './Navbar';
import Search from './Search';

function Header({search, updateSearch}) {
  return (
    <div className='header'>
        <Navbar />
        <Search 
        search={search} 
        updateSearch={updateSearch}/>
    </div>
  )
}

export default Header