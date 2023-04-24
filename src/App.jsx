import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Redirect } from 'react-router-dom';
import SideBar from './components/SideBar.jsx';
import MainContainer from './containers/MainContainer.jsx';
import Login from './components/Login.jsx'

function App () {
  const [loggedIn, setLoggedIn] = useState(false);


  // useEffect(() => {
  //   if (loggedIn === false) {
  //     navigate('/login');
  //   }
  // }, [loggedIn, navigate]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<div id='app'><SideBar /> <MainContainer /> </div>} />
        <Route path="/signup" element={<div>Signup</div>} /> 
        <Route path="/favorites" element={<div>Hi</div>} /> 
      </Routes>
    </Router>
  );
}

export default App;
