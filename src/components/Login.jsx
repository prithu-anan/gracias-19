import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'

const Login = ({ setIsLoggedIn }) => {
	const navigate = useNavigate()

  const handleSubmission = (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulating a successful login
    localStorage.setItem('username', username);
    setIsLoggedIn(true); // Update state immediately
    navigate('/puzzle');
  };

  return (
    <div
        className='
            flex 
            justify-center 
            items-center 
            xl:w-[20vw]
            l:w-[40vw]
            w-[70vw]   
            login
        '
    >
        <form onSubmit={handleSubmission}>
            <div className='flex justify-center font-bold text-[1.6rem]'>
                <h1>Login</h1>
            </div>
            <div className='form-group'>
                <label htmlFor='username' className='labels'>Username</label>
                <input type='username' id='username' className='textfield'/>
            </div>
            <div className='form-group'>
                <label htmlFor='password' className='labels'>Password</label>
                <input type='password' id='password' className='textfield'/>
            </div>
            <div className='submit'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Login