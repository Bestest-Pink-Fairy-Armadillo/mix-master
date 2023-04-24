import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
  function toHome() {
    console.log(`I'm Home`);
  }

  function toFavs() {
    console.log(`I'm in Favs`);
  }


  return (
    <div id='sideBar'>
      <div className='sideBarButton'>
        <Link to="/">
          <button onClick={toHome}>Home</button>
        </Link>
        <Link to="/favorites">
          <button onClick={toFavs}>Favorites</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  )
}

export default SideBar;