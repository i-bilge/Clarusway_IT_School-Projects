import React from 'react'
import style from './style/recipe.module.css'
import { useNavigate } from 'react-router-dom'

function Recipe({title, calories, image, ingredients, giveDetails}) {
  let navigate = useNavigate();
  return (
    <div className={style.recipe}>
        <h1>{title}</h1>
        <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <p>{calories}</p>
        <img style={{width: "200px", height: "200px"}} src={image} alt=''/>
        <button onClick={ () => navigate("/details")}>View More</button>
    </div>
  )
}

export default Recipe