import React from "react";
import "../profile.css"
import logo from '../logo.png';


export default function Profile (props) {
  return (
    <body>
    <div class="profile">
      <div class="profile">
      <link href="'https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap'" rel="stylesheet"></link>
      </div>
      <div class="profile-logo">
      <img src={logo} alt="Logo" />
      </div>
      <div>
        <h1>Profile</h1>
      </div>
      <div class="profile-details">
        <p>Name: JJJ</p>
        <p>Email: jjj@triplej.com</p>
      </div>
      <div class="logout-button">
      <button type="submit" id="logout" class="logout-btn">Logout</button>
      </div>
    </div>
    </body>
  );
}