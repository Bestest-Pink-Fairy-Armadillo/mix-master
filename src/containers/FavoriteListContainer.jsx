import React from 'react'
import SideBar from '../components/SideBar';
import RecipeContainer from './RecipeContainer';

function FavoriteListContainer() {
  return (
    <div id='favoriteContainer'>
      <SideBar />
      <div id='favCardArea'>
        <h2>Favorites List</h2>
      </div>
    </div>
  )
}

export default FavoriteListContainer;
