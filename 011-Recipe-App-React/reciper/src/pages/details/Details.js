import './Details.scss'
import { useLocation, useNavigate } from 'react-router-dom';

function Details() {
  let navigate = useNavigate();
  const {state} = useLocation()
  console.log(state)

  return (
    <div className="DetailsPage" style={{ backgroundColor: "rgba(75, 184, 184. 0,5)"}}>
      <div className="dish" >
        <img style={{width: "200px", height: "200px"}} src={state.recipe.image} alt=''/>
        <div className='info'>
          <p className='dishLabel'>{state.recipe.label}</p>
          <p>{state.recipe.calories}<span> Cal</span></p>
          <div className='Ing'>
            <h4>Ingredients</h4>
            <ol className='Ing'>
                {state.recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
          </div>
        </div>
      </div>
      <footer>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </footer>
    </div>
  )
}
  
  export default Details;