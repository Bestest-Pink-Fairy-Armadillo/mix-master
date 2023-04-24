import React, { useState, useEffect } from 'react'

function SideBar() {
  function toHome() {
    console.log(`I'm Home`);
  }

  function toFavs() {
    console.log(`I'm in Favs`);
  }


  return (
    <>
      <button onClick={toHome}>Home</button>
      <button onClick={toFavs}>Favorites</button>
    </>
  )
}

export default SideBar;