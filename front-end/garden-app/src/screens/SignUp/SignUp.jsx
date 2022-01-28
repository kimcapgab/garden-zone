import React from 'react';
import './SignUp.css'

export default function SignUp() {
  return (
    <div className='sign-up-container'>
      <div className='sign-up-lt'>
      <h1 className='sign-up-title'>Create an account to join the gardening community!</h1>
        <img className='sign-up-img' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643348631/3_pizfo5.png" alt="garden-sign-up" />
        </div>
      <div className='sign-up-form'>
        <div className='form-container'>
        <form className='sign-up'>
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input type="password" placeholder='Confirm Password' />
          <button>Create Account</button>
          </form>
          </div>
      </div>
    </div>
  )
}
