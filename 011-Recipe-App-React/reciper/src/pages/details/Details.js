import './Details.scss'
import { useLocation } from 'react-router-dom';

function Details() {

  const {state} = useLocation()
  console.log(state)

  return (
    <div className="DetailsPage" style={{ backgroundColor: "rgba(75, 184, 184. 0,5)"}}>
      <div className="dish" >
        <div className='detailLabel'>
        {state.recipe.label}
        </div>
        <img style={{width: "200px", height: "200px"}} src={state.recipe.image} alt=''/>
        <div className='Cal'>
        {state.recipe.calories}
        </div>
        <ol>
            {state.recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
            ))}
        </ol>
      </div>
    </div>
  )
}
  
  export default Details;