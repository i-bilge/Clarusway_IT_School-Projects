import React from 'react'

function SearchBar({getSearch, search, updateSearch}) {

  return (
    <form onSubmit={getSearch} className="searchForm">
        <input
            className="searchBar"
            type="text"
            value={search}
            onChange={updateSearch}
        />
        <button className="searchBtn" type="submit">
            SEARCH
        </button>
    </form>
  )
}

export default SearchBar