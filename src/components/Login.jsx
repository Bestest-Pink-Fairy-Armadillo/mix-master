import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// const loginUser = async credentials => {
//     const data = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//     return data;
// }

function Login (props) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

//   const loginFunc = () => {
//     fetch('/login', {
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

    const handleClick = async e => {
        const token = await loginUser({
            username,
            password
        });
        props.setLoggedIn(token);
    }

    return(
    <div className='loginPage'>
        <input id='usernameInput' placeholder='Username' onChange={e => setUsername(e.target.value)}></input>
        <input placeholder='Password' onChange={e => setPassword(e.target.value)} ></input>
        <div>
            <button onClick={handleClick}>Login</button>
            <Link to="/signup">
            <button>Sign Up</button>
            </Link> 
        </div>
    </div>
    )
}

export default Login;