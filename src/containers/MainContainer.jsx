import React, {useState, useEffect} from 'react';
import RecipeContainer from './RecipeContainer.jsx';
import Input from '../components/Input.jsx';

function MainContainer() {
  const [search, changeSearch] = useState([]);
  // const [showRecipeContainer, setShowRecipeContainer] = useState(0)

  useEffect(() => {
    // console.log(showRecipeContainer)
  }, [search]);

  return (
    <div id='mainContainer'>
        {/* <div>MainContainer</div> */}
        <Input  changeSearch = {changeSearch}/>
        <RecipeContainer  search={search} />
    </div>
  )
}

export default MainContainer;
