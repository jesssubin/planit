import React from "react";


export default function Login (props) {
  return (
    <main>
      <h1>Planit</h1>
      <form action="/login" method="POST">
        <input type="email" name="email" placeholder="Enter Email">
        <input type="password" name="password" placeholder="Enter Password">
        <button type="submit" class="submit-btn"> Login </button>
      </form>
    </main> 
  );
}