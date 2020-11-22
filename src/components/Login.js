import React from "react";
import "../login.css"
import logo from '../logo.png';

export default function Login (props) {
  return (
    <div class="login">
      <link href="'https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap'" rel="stylesheet"></link>
      <div>
        <img class="logo" src={logo} alt="Logo" />
      </div>
      <div class="login-form">
        <form action="/login" method="POST">
          <input class="email" type="email" name="email" placeholder="Enter Email" />
          <input class="password" type="password" name="password" placeholder="Enter Password" />
          <button type="submit" class="submit-btn"> Login </button>
        </form>
        <div>
          <a id="signup" href="/register">Don't have an account? Sign up here!</a>
        </div>
      </div>
    </div>
  );
}