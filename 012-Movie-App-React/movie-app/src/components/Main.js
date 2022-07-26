import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from './Card'


function Main() {
  return (
    <>
    <div className='header'>
        <nav>
            <ul>
                <li><a href='#'>Popular</a></li>
                <li><a href='#'>Theatre</a></li>
                <li><a href='#'>Kids</a></li>
                <li><a href='#'>Drama</a></li>
                <li><a href='#'>Comedie</a></li>
            </ul>
        </nav>
        <form>
            <div className='search-btn'>
                <input type="text" placeholder="Enter Movie Name..." className='inputText'>
                </input>
                <button>SEARCH</button>
            </div>
        </form>
    </div>
    <idv className='container'>
        <Card />
    </idv>
    </>
  )
}

export default Main