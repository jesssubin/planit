import React, { useState } from "react";
import "../login.css"
import logo from '../logo.png';
import axios from 'axios';

export default function Login (props) {
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
        props.showError(null);
        const userData = {
            "email":state.email,
            "password":state.password,
        }
        axios.post('/api/users/login', userData, { withCredentials: true })
            .then(function (response) {
                if(response.status === 200){
                  console.log("axios get request has been made successfully");
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    //localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    // redirectToExplore();
                    props.showError(null)
                } else{
                    props.showError("Some error ocurred");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
  }    
    // } else {
    //     props.showError('Please enter valid name and password')    
    // }   
  


  return (
    <div class="login">
      <div>
        <img class="login-logo" src={logo} alt="Logo" />
      </div>
      <div class="login-form">
        <div class="sign-in-text">
          <p>Sign in</p>
        </div>
        <form class="login-form" action="/login" method="POST">

      <label for="email"></label>
      <input type="email" 
             className="form-control" 
             id="email" 
             placeholder="Enter email" 
             value={state.email}
             onChange={handleChange} />

      <label for="password"></label>
      <input type="password" 
             className="form-control" 
             id="password" 
             placeholder="Password"
             value={state.password}
             onChange={handleChange} />
  
      <button type="submit" 
              class="submit-btn"
              className="btn btn-primary"
              onClick={handleSubmitClick}>
        Login
      </button> 
    </form>
        <div>
          <span>Don't have an account? <a id="signup" href="/register">Sign up here!</a></span>
        </div>
      </div>
    </div>
  );
}