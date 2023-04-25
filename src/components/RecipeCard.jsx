import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";;

function RecipeCard(props) {
  const [isStarred, setIsStarred] = useState(false);

  return (
    <div className='recipe-card'>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <h2>{props.recipeData.name}</h2> 
          <FaStar
          style={{ marginLeft: "10px", cursor: "pointer", color: isStarred ? "gold" : "grey" }}
          onClick={() => setIsStarred(!isStarred)}
          />
        </div>
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
    </div>
  )
}


export default RecipeCard;