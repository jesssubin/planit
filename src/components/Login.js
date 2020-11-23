import React from "react";
import "../login.css"
import logo from '../logo.png';

export default function Login (props) {
  return (
    <div class="login">
      <div>
        <img class="login-logo" src={logo} alt="Logo" />
      </div>
      <div class="login-form">
        <div class="sign-in-text">
          <p>Sign in</p>
        </div>
        <form class="login-form" action="/login" method="POST">
          <input class="email" type="email" name="email" placeholder="Enter Email" />
          <input class="password" type="password" name="password" placeholder="Enter Password" />
          <button type="submit" class="submit-btn"> Login </button>
        </form>
        <div>
          <span>Don't have an account? <a id="signup" href="/register">Sign up here!</a></span>
        </div>
      </div>
    </div>
  );
}