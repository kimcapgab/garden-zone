import React from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className='header-container'>
      <h1 className='header-title' onClick={() => navigate('/')}>Garden Zone</h1>
      <div className='header-log'>
      <h1 onClick={() => navigate('user/login/')}>Log In</h1>
      <h1 onClick={() => navigate('user/signup/')}>Sign Up</h1>
      </div>
    </div>
  )
}
