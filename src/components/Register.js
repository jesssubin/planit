import React, { useState } from "react";
import "../register.css"
import logo from '../logo.png';
import axios from 'axios'; 
import { useHistory } from "react-router-dom";

export default function Register (props) {
  const [state, setState] = useState({
    full_name: "", 
    email: "", 
    password: "",   
    confirmPassword: ""
  })


  //update the state based on user input
  const handleChange = (event) => {
    const { id, value } = event.target
    setState(prev => ({
      ...prev, 
      [id] : value
    }))
  }
  
  //send user data to backend database
  const saveUser = () => {
    if(state.email.length && state.password.length) {
        props.showError(null);
        const userData = {
            "full_name":state.full_name,
            "email":state.email,
            "password":state.password,
        }
        axios.post('/api/users/register', userData)
            .then(function (response) {
                if(response.status === 200){
                  console.log("axios post request has been made successfully");
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Registration successful. Redirecting to home page..'
                    }))
                    props.showError(null)
                } else{
                    props.showError("Some error ocurred");
                }
            })
            .catch(function (error) {
                console.log(error);
            });    
    } else {
        props.showError('Please enter valid name and password')    
    }   
  }

  const history = useHistory();
  const goExplore = () => history.push('/');
  
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if(state.password === state.confirmPassword) {
        saveUser()    
        console.log('user saved!');
        goExplore()
    } else {
        props.showError('Passwords do not match')
        console.log('try again');
    }
}


  return (
    <div class="register">
      <div class="registerLogo">
        <img src={logo} alt="Logo" />
      </div>
      <div class="registerHeader">
        <h1>Create a New Account</h1>
        <p>Please fill in the form</p>
      </div>
    <form class="register-form" action="/register" method="POST">
      <span>
        <label for="full_name"></label>
        <input type="full_name" 
              className="form-control"
              id="full_name"
              placeholder="Enter Your Name" 
              name="full_name" 
              value={state.full_name}
              onChange={handleChange}
              required />
      </span>
      <span>
        <label for="email"></label>
        <input type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter Email" 
              value={state.email}
              onChange={handleChange} />
      </span>
      <span>
        <label for="password"></label>
        <input type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter Password"
              value={state.password}
              onChange={handleChange} />
      </span>
      <span>
        <label for="confirmPassword"></label>
        <input type="password" 
              className="form-control" 
              id="confirmPassword" 
              placeholder="Confirm Password"
              value={state.confirmPassword}
              onChange={handleChange} />
      </span>
      <div class="register-button">
        <button type="submit" 
                 class="register-btn"
                onClick={handleSubmitClick}>
          Register
        </button> 
      </div>
      <div>
        <span>Have an account? <a href="/login" id='register-login'>Sign in.</a></span>
      </div>
    </form>
  </div>
  )
}