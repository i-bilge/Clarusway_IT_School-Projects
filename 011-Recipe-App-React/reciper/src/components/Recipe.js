import React from 'react'
import style from './style/recipe.module.css'
import { useNavigate } from 'react-router-dom'

function Recipe({recipe}) {
  const navigate = useNavigate();

  return (
    <div className={style.recipe}>
        <h1>{recipe.label}</h1>
        <img style={{width: "200px", height: "200px"}} src={recipe.image} alt=''/>
        <button onClick={ () => navigate("details", {state: {recipe}})}>View More</button>
    </div>
  )
}

export default Recipe