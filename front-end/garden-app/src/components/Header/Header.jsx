import React from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className='header-container'>
      <div className='logo-cotainer'>
        <img className='home-logo' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643481624/Project%204/Your_Craft_Logo_5_bvkhcf.png" alt="logo" />
        <h1 className='header-title' onClick={() => navigate('/')}>Garden Zone</h1>
      </div>
      <div className='header-log'>
      <h1 onClick={() => navigate('user/login/')}>Log In</h1>
      <h1 onClick={() => navigate('user/signup/')}>Sign Up</h1>
      </div>
    </div>
  )
}
