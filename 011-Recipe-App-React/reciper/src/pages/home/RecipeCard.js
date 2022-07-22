import React from 'react'
import Recipe from '../../components/Recipe'

function RecipeCard({recipes}) {
  return (
    <div className="recipes">
              {recipes.map((recipe) => (
                <Recipe
                  key={recipe.recipe.label}
                  recipe={recipe.recipe}
                />
              ))}
    </div>
  )
}

export default RecipeCard