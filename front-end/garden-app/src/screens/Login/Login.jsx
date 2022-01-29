import React from 'react';
import './Login.css'

export default function Login() {
  return (
    <div className="Login-container">

      <h1 className='login-title'>Welcome Back!</h1>

      <img className='login-image-1' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643420914/Project%204/6_kvbguj.png" alt="gardener1" />

      <img className='login-image-2' src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643420914/Project%204/5_tmiyam.png" alt="gardener1" />

      <div className="Login-form">
        <div className="form-container-sign-up">
          <form className="log-in">
            <div className="log-in-all-inputs">
              <input
                className="sign-up-input"
                type="text"
                placeholder="Username"
              />
              <input
                className="sign-up-input"
                type="password"
                placeholder="Password"
              />
              <button className="act-btn">Log In</button>
            </div>
          </form>
        </div>

        {/* <div className='login-image-1-container'> */}

        {/* </div> */}


      </div>



    </div>
  );
}
