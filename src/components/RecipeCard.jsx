import React from 'react'

function RecipeCard(props) {
  return (
    <div className='recipe-card'>
        <h2>{props.recipeData.name}</h2>
        <ul>Ingredients:
        {props.recipeData.ingredients.map(ing => (
          <li>{ing}</li>
        ))}
        {/* {console.log(props.recipeData.ingredients)} */}
        </ul>
        <ol>Instructions:
        {props.recipeData.instructions.split('. ').map(ins => (
          <li>
            {ins.replace('.','').concat('.')}
          </li>
        ))}
        {/* {console.log(props.recipeData.instructions.split('. '))} */}
        </ol>
        <button id='cardButton'>Add to Favorite</button>
    </div>
  )
}


export default RecipeCard;