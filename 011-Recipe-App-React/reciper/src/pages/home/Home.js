import React, { useState } from "react";
import Recipe from "../../components/Recipe";

function Home() {
  const APP_ID = "5ce67892";
  const APP_KEY = "de0648c0b1fea868537453f6e2edceb1";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const  getSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log("getsearch execute")
  };


  return (
    <div className="HomePage" style={{ backgroundColor: "rgba(75, 184, 184. 0,5)"}}>
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
            <div className="recipes">
              {recipes.map((recipe) => (
                <Recipe
                  key={recipe.recipe.label}
                  recipe={recipe.recipe}
                  // title={recipe.recipe.label}
                  // calories={recipe.recipe.calories}
                  // image={recipe.recipe.image}
                  // ingredients={recipe.recipe.ingredients}
                />
              ))}
            </div>
    </div>
  )
}
  
  export default Home;