import React from "react";


export default function Register (props) {
  return (
    <div class="register">
      <link rel="stylesheet" href="/styles/register.css" type="text/css" />
     <div class="logo" id="logo">
      <img src="./public/Planit.png" alt="avatar" class='avatar' />
    </div>
    <form action="/register" method="POST">
      <h1>Create New Account</h1>
      <p>Please fill in this form</p>

      <label for="name"></label>
      <input type="name" placeholder="Enter Name" name="name" required />

      <label for="email"></label>
      <input type="email" placeholder="Enter Email" name="email" required />

      <label for="password"></label>
      <input type="password" placeholder="Enter Password" name="password" required />
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <a href="/login" id='register-login'>Have an account? Login in here!</a>

  </div>
  )
}