import React, { useState } from "react";
import "../register.css"
import axios from 'axios'; 
import { useHistory } from "react-router-dom";

export default function Register (props) {
  const [state, setState] = useState({
    full_name: "", 
    email: "", 
    password: "",   
    confirmPassword: ""
  })

  const [error, setError] = useState('')
  const history = useHistory();

  //update the state based on user input
  const handleChange = (event) => {
    const { id, value } = event.target
    setState(prev => ({
      ...prev, 
      [id] : value
    }))
  }
  
  //send user data to backend database
  const handleSubmitClick = (e) => {
    e.preventDefault();
    const userData = {
        "full_name":state.full_name,
        "email":state.email,
        "password":state.password,
    }
    
    if (!userData.full_name || !userData.email || !userData.password || !state.confirmPassword) {
      setError("Please enter your name, email and password")
    } else if (state.password !== state.confirmPassword) {
      setError("Passwords do not match!")
    } else {
    axios.post('/api/users/register', userData)
        .then(function (response) {
            if(response.status === 200){
                setState(prevState => ({
                    ...prevState,
                    'successMessage' : 'Registration successful. Redirecting to home page..'
                }))
                setError("")
                props.setUser(response.data) 
                history.push('/plan')
            } else{
                setError("Some error ocurred");
            }
        })
        .catch(function (error) {
          setError("User with this email already exists!");
        });    
    }   
    
  }

  const goToPlan = () => history.push('/plan');

  return (
    <div class="register">
    <div class="register-form">
    <form class="register-form" action="/register" method="POST">
      <span>
        <label for="full_name"></label>
        <input type="full_name" 
              class="register-name"
              id="full_name"
              placeholder="Enter Your Name" 
              value={state.full_name}
              onChange={handleChange}
              style= {{backgroundColor: "#FFFFFF00", color: "#FFFFFF", border: "2px solid white"}}
               />
      </span>
      <span>
        <label for="email"></label>
        <input type="email" 
              class="register-email" 
              id="email" 
              class="register-email"
              placeholder="Enter Email" 
              value={state.email}
              onChange={handleChange} 
              style= {{backgroundColor: "#FFFFFF00", color: "#FFFFFF", border: "2px solid white"}}
               />
      </span>
      <span>
        <label for="password"></label>
        <input type="password" 
              class="register-password" 
              id="password" 
              class="register-password"
              placeholder="Enter Password"
              value={state.password}
              onChange={handleChange}
              style= {{backgroundColor: "#FFFFFF00", color: "#FFFFFF", border: "2px solid white"}} 
              />
      </span>
      <span>
        <label for="confirmPassword"></label>
        <input type="password" 
              class="register-confirm-pwd" 
              id="confirmPassword" 
              placeholder="Confirm Password"
              value={state.confirmPassword}
              onChange={handleChange}
              style= {{backgroundColor: "#FFFFFF00", color: "#FFFFFF", border: "2px solid white"}} 
              />
      </span>
      {error && <div className="alert alert-danger"> {error} </div>}
      <div class="register-button">
        <button type="submit" 
                 class="register-btn"
                onClick={handleSubmitClick}>
          Register
        </button> 
      </div>
      
      <div>
        <span>Have an account? <a href="/login" id='register-login'><strong>Sign In</strong></a></span>
      </div>
    </form>
    <p class="register-slogan">Plan your trip around the planet</p>
    </div>
  </div>
  )
}