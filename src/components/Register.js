import React, { useState } from "react";
import "../register.css"
import logo from '../logo.png';
import axios from 'axios'; 

export default function Register (props) {

  const [state, setState] = useState({
    full_name: "", 
    email: "", 
    password: "",   
    confirmPassword: ""
  })
  
  // constructor() {
  //   super();
  //   this.handler = this.handler.bind(this);
  // }

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
        axios.post('/api/users', userData)
            .then(function (response) {
                if(response.status === 200){
                  console.log("axios post request has been made successfully");
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Registration successful. Redirecting to home page..'
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
    } else {
        props.showError('Please enter valid name and password')    
    }   
  }
  
// const redirectToExplore = () => {
//   props.updateTitle('explore')
//   props.history.push('/');
// }
  
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if(state.password === state.confirmPassword) {
        saveUser()    
        console.log('user saved!');
    } else {
        props.showError('Passwords do not match')
        console.log('try again');
    }
}


  return (
    <div>
    <form action="/register" method="POST">
      <h1>Create New Account</h1>
      <p>Please fill in this form</p>

      <label for="full_name"></label>
      <input type="full_name" 
             className="form-control"
             id="full_name"
             placeholder="Enter Your Full Name" 
             name="full_name" 
             value={state.full_name}
             onChange={handleChange}
             required />

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
      
      <label for="confirmPassword"></label>
      <input type="password" 
             className="form-control" 
             id="confirmPassword" 
             placeholder="Confirm Password"
             value={state.confirmPassword}
             onChange={handleChange} />

      <button type="submit" 
              className="btn btn-primary"
              onClick={handleSubmitClick}>
        Register
      </button> 
    </form>
    <a href="/login" id='register-login'>Have an account? Login in here!</a>

  </div>
  )
}