import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from '../../services/users.js'; 
import './SignUp.css'

export default function SignUp({ setLoggedIn }) {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate();

  const onSignUp = async (event) => {
    event.preventDefault()
    const newUser = {
      username,
      email,
      password,
    }
    try {
      const user = await signUp(newUser)
        setLoggedIn(user)
        nav('/')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='sign-up-container'>
      <div className='sign-up-lt'>
      <h1 className='sign-up-title'>Create an account to join the gardening community!</h1>
        <img className='sign-up-img' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643348631/3_pizfo5.png" alt="garden-sign-up" />
      </div>
      


      <div className='sign-up-form'>
        <div className="form-container-sign-up">
          <form className='sign-up'>
            <div className='sign-up-all-inputs'>
          <input required className="sign-up-input" type="text" placeholder='Username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input required className="sign-up-input" type="email" placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input required className="sign-up-input" type="password" placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              
              <button className='act-btn' onClick={onSignUp}>Create Account</button>
              </div>
          </form>
        </div>
      </div>


    </div>
  )
}
