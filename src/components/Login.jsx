import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login () {
//   const loginFunc = () => {
//     fetch('/api', {
// 			method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
// 						userName: document.getElementById('').value,
//             password:
// 					}),
//     })
//   }
    return(
    <div className='loginPage'>
        <input id='usernameInput' placeholder='Username'></input>
        <input placeholder='Password'></input>
        <div>
            <button>Login</button>
            <Link to="/signup">
            <button>Sign Up</button>
            </Link> 
        </div>
    </div>
    )
}

export default Login;