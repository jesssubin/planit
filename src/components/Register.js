import React from "react";
import "../register.css"
import logo from '../logo.png';

export default function Register (props) {
  return (
    <div class="register">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
      <div class="registerLogo">
        <img src={logo} alt="Logo" />
      </div>
      <div class="registerHeader">
      <h1>Create a New Account</h1>
      <p>Please fill in the form</p>
      </div>
    <form action="/register" method="POST">
      <span>
        <label for="name"></label>
        <input type="name" placeholder="Enter Name" name="name" required />
      </span>
      <span>
        <label for="email"></label>
        <input type="email" placeholder="Enter Email" name="email" required />
      </span>
      <span>
        <label for="password"></label>
        <input type="password" placeholder="Enter Password" name="password" required />
      </span>
      
      <div class="register-button">
        <button type="submit" class="register-btn">Register</button>
      </div>
      
      <div>
        <span>Have an account? <a href="/login" id='register-login'>Sign in.</a></span>
      </div>
    </form>  
  </div>
  )
}