import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "../login.css"
import logo from '../logo.png';
import axios from 'axios';

export default function Login (props) {
  const [error, setError] = useState("")
  const [state, setState] = useState({ 
    email: "", 
    password: ""
  })

  const handleChange = (event) => {
    const { id, value } = event.target
    setState(prev => ({
      ...prev, 
      [id] : value
    }))
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
        //props.showError(null);
        const userData = {
            "email":state.email,
            "password":state.password,
        }
        if (!userData.email || !userData.password) {
          setError("Please enter your email and password!")
        } else {
        axios.post('/api/users/login', userData, { withCredentials: true })
            .then(function (response) {
              console.log("respsonse status after login:", response.status)
                if(response.status === 200){
                  console.log("axios get request has been made successfully", response);
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    setError("")
                    props.setUser(response.data) 
                    goExplore();
                } else{
                    console.log("error res login", response)
                    setError("Please enter valid email and password");
                }
              
            })
            .catch(function (error) {
                setError("Invalid email or password!");
            });
      }  
    }  
  
    const history = useHistory();
    const goExplore = () => history.push('/plan');

 

  return (
    <div class="login">

       <div class="sign-in-text">
         
        </div>

      <div class="login-form">
      <form class="login-form" action="/login" method="POST">

      <label for="email"></label>
      <input type="email" 
             class="login-email"
             
             id="email" 
             placeholder="Enter email" 
             value={state.email}
             onChange={handleChange} 
             style= {{backgroundColor: "#FFFFFF00", color: "#FFFFFF", border: "2px solid #FFFFFF"}}/>

      <label for="password"></label>
      <input class="login-password"
             type="password" 
            
             id="password" 
             placeholder="Password"
             value={state.password}
             onChange={handleChange}
             style= {{backgroundColor: "#FFFFFF00", color: "#FFFFFF", border: "2px solid #FFFFFF"}}/>
    {error && <div className="alert alert-danger"> {error} </div>}
   
      <div class="login-button">
        <button type="submit" 
                class="login-btn"
                onClick={handleSubmitClick}>
          Login
        </button> 
        <div>
          <span>Don't have an account? <a id="signup" href="/register"><strong>Sign up here!</strong></a></span>
        </div>
      </div>
    </form>
        <p class="login-slogan">Plan your way around the planet</p>
      </div>
    </div>
  );
}