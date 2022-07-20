import React from 'react'
import style from './style/recipe.module.css'

function Recipe({title, calories, image, ingredients}) {
  return (
    <div className={style.recipe}>
        <h1>{title}</h1>
        <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <p>{calories}</p>
        <img src={image} alt=''/>
    </div>
  )
}

export default Recipe