import React from 'react';
import './Header.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/vegetables/create">
      Add Vegetables
    </NavLink>
    <NavLink className="link" to="/logout">
      Log Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/user/signup/">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/user/login/">
      Log In
    </NavLink>
  </>
);



export default function Header({loggedIn}) {
  const navigate = useNavigate()
  return (
    <nav>
    <div className='header-container'>
      <div className='logo-cotainer'>
        <img className='home-logo' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643481624/Project%204/Your_Craft_Logo_5_bvkhcf.png" alt="logo" />
        <h1 className='header-title' onClick={() => navigate('/')}>Garden Zone</h1>
      </div>
      <div className='header-log'>
          
          {
          loggedIn? authenticatedOptions : unauthenticatedOptions
          }
      </div>
      </div>
      </nav>
  )
}
