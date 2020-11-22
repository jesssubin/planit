import React from "react";
import "../register.css"

export default function Register (props) {
  return (
    <div class="register">
      <link href="'https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap'" rel="stylesheet"></link>
     <div class="logo" id="logo">
      <img src="../public/Planit.png" class='planitLogo' />
    </div>
    <form action="/register" method="POST">
      <h1>Create New Account</h1>
      <p>Please fill in this form</p>
      <span>
      <label for="name"></label>
      <input type="name" placeholder="Enter Name" name="name" required />
      </span>
      <span>
      <label for="email"></label>
      <input type="email" placeholder="Enter Email" name="email" required />
      </span>
      <label for="password"></label>
      <input type="password" placeholder="Enter Password" name="password" required />
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <a href="/login" id='register-login'>Have an account? Login in here!</a>

  </div>
  )
}