import React, {useState, useEffect} from 'react';
import RecipeContainer from './RecipeContainer.jsx';
import Input from '../components/Input.jsx';

function MainContainer() {
  const [search, changeSearch] = useState([]);

  useEffect(() => {
    console.log(search)
  }, [search]);

  return (
    <>
        <div>MainContainer</div>
        <Input changeSearch = {changeSearch}/>
        <RecipeContainer id='recipeContainer' search = {search}/>
    </>
  )
}

export default MainContainer;
