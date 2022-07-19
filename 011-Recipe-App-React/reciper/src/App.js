import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const APP_ID = "5ce67892";
  const APP_KEY = "de0648c0b1fea868537453f6e2edceb1";
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="searchForm">
        <input className="searchBar" type="text"/>
        <button className="searchBtn" type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default App;
