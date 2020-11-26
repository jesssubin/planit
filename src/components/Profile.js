import React, { useEffect, useState } from "react";
import "../profile.css"
import logo from '../logo.png';
import Login from './Login'; 
import axios from 'axios'; 

export default function Profile (props) {

  
  const [ user, setUser ] = useState(); 
  
  useEffect(()=> {
    axios.get('/api/users/loggedin', { withCredentials: true }) 
        .then(function(response) {
          console.log("get user respsonse", response)   
          setUser(response.data); 
        })
  },[])

  const logoutUser = () => {
    axios.post('/api/users/logout')
    .then(function (response) {
      //response should be null
      console.log("response from logout", response.data)
      setUser(response.data)
    })
  }
  
  const handleSubmitClick = (e) => {
    e.preventDefault();
    logoutUser();
  }

  const showLogin = () => {
    // e.preventDefault();
    return (
        <Login />
    )
  }
  console.log(user, "outside useeffect")
  return (
    <body>
      { !user ? showLogin() :
    <div class="profile">
      <div class="profile-logo">
      <img src={logo} alt="Logo" />
      </div>
      <div>
        <h1>Profile</h1>
      </div>
      <div class="profile-details">
        <p>Name: {user.full_name}</p>
        <p>Email: {user.email}</p>
      </div>
      <div class="logout-button">
      <button type="submit" 
              id="logout" 
              class="logout-btn" 
              onClick={handleSubmitClick}>Logout</button>
      </div>
    </div>}
    </body>
  );
}