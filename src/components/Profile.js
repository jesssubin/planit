import React, { useEffect, useState } from "react";
import "../profile.css"
import axios from 'axios'; 

export default function Profile (props) {

  const logoutUser = () => {
    axios.post('/api/users/logout')
    .then(function (response) {
      props.setUser(null)
    })
  }
  
  const handleSubmitClick = (e) => {
    e.preventDefault();
    logoutUser();
  }

  return (
    <div class="profile">    
        <p class="sign-in-text">Profile</p>  
       { !props.user ? null :
      <div class="profile-form">
        <p class="profile-name"><strong> Name: </strong> {props.user.full_name}</p>
        <p class="profile-email"><strong> Email: </strong> {props.user.email}</p>
      </div> 
      }
      <div class="logout-button">
      <button type="submit" 
              id="logout" 
              class="logout-btn" 
              onClick={handleSubmitClick}>Logout</button>
      </div>   
    </div>

  );
}