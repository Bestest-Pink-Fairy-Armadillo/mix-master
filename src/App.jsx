import React, { useState, useEffect } from 'react';
import SideBar from './components/SideBar.jsx'
import MainContainer from './containers/MainContainer.jsx';
import styles from './styles/styles.scss';

function App () {
  const [websiteState, setWebsiteState] = useState('');

    return (
      <>
        <h1 id='websiteTitle' >Mix Master tm</h1>
        <div>
          <SideBar id='sideBar' />
          <MainContainer id='mainContainer'/>
        </div>
      </>
    )
}

export default App;
