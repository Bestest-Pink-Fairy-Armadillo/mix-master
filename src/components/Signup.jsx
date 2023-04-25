import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup () {
  const firstName = useRef();
  const username = useRef();
  const password = useRef();
  let navigate = useNavigate();

  const signupFunc = () => {

    console.log(JSON.stringify({
        username: username.current.value,
        password: password.current.value,
        firstname: firstName.current.value
      }));

    fetch('/api/signup', {
			method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
        firstname: firstName.current.value
      }),
    })
      .then(response => response.json())
      .then(data => {
        navigate('/');
      })
      .catch(err => console.log('fetch error'))
  }

    return(
    <div className='signupPage'>
        <input ref={firstName} placeholdSr='First Name' />
        <input ref={username} placeholder='Username'></input>
        <input type="password" ref={password} placeholder='Password'></input>
        <div>
            <button onClick={signupFunc}>Sign Up</button>
        </div>
    </div>
    )
}

export default Signup;