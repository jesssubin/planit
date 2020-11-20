import React from "react";


export default function Register (props) {
  return (
    <div>
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