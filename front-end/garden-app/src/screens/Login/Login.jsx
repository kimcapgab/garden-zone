import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../services/users";
import './Login.css'

export default function Login({ setLoggedIn }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await logIn(form);
      if (user) {
        setLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        password: "",
      });
    }
  };

  const { username, password } = form;




  return (
    <div className="Login-container">

      <h1 className='login-title'>Welcome Back!</h1>

      <img className='login-image-1'
        src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643420914/Project%204/6_kvbguj.png"
        alt="gardener1" />

      <img className='login-image-2'
        src="https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643420914/Project%204/5_tmiyam.png"
        alt="gardener1" />

      <div className="Login-form">
        <div className="form-container-sign-up">
          <form className="log-in" onSubmit={handleLogin}>
            <div className="log-in-all-inputs">
              <input
                className="sign-up-input"
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
              <input
                className="sign-up-input"
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
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
