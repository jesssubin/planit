import React, { useEffect, useState } from "react";
import "../profile.css"
import logo from '../logo.png';
import Login from './Login'; 
import axios from 'axios'; 

export default function Profile (props) {
  
  console.log("props from profile", props)
  // const [ user, setUser ] = useState(); 
  
  // useEffect(()=> {
  //   axios.get('/api/users/loggedin', { withCredentials: true }) 
  //       .then(function(response) {
  //         console.log(" respsonse", response)   
  //         setUser(response.data); 
  //       })
  // },[])

  const logoutUser = () => {
    axios.post('/api/users/logout')
    .then(function (response) {
      //response should be null
      console.log("response from logout", response.data)
      props.setUser(null)
    })
  }
  
  const handleSubmitClick = (e) => {
    e.preventDefault();
    logoutUser();
  }

  // const showLogin = () => {
  //   e.preventDefault();
  //   return (
  //       <Login user={props.user} setUser={props.setUser} />
  //   ) 
  // }
  console.log(props.user, "outside useeffect")
  return (
   
    <div class="profile">
      <div class="sign-in-text">
        <p>Profile</p>
      </div>
    
       { !props.user ? null :
      <div class="profile-form">
        <p><strong> Name: </strong> {props.user.full_name}</p>
        <p><strong> Email: </strong> {props.user.email}</p>
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