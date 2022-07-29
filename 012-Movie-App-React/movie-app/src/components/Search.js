import React from 'react'

function Search({ search, updateSearch}) {
  return (
    <form onSubmit={updateSearch} className='search-btn'>
                <input 
                  type="text" 
                  placeholder="Enter Movie Name..."
                  className='inputText' 
                  value={search}
                  onChange={updateSearch}>
                </input>
                <button type='submit'>SEARCH</button>
    </form>
  )
}

export default Search