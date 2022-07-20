import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import './App.css';
import Navbar from './components/navbar/Navbar.js';

function App() {
  const APP_ID = "5ce67892";
  const APP_KEY = "de0648c0b1fea868537453f6e2edceb1";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("")
  }

  return (
    <div className="App">
      <Navbar />
      <form onSubmit={getSearch} className="searchForm">
        <input className="searchBar" type="text" value={search} onChange={updateSearch} />
        <button className="searchBtn" type="submit">SEARCH</button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
