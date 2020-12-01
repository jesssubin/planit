import React, { useState, useEffect } from "react";
import axios from 'axios'; 

import Login from "./components/Login";
import Register from "./components/Register"; 
import Explore from "./components/LiveSearch";
import History from "./components/History"; 
import Profile from "./components/Profile";
import PlanList from "./components/PlanList"; 
import FavouritesSearch from "./components/FavouritesSearch"; 

import "./App.css"; 


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App () {
  const [errorMessage, updateErrorMessage] = useState(null);
  const [user, setUser] = useState(null); 

  useEffect(()=> {
    axios.get('/api/users/loggedin',{ withCredentials: true }) 
        .then(function(response) {
          setUser(response.data); 
        })
  },[])  
  
  //if user is not logged in, they can't see any page other than register or login
  return (
    <Router>
        <nav class="nav-bar">
            <Link to="/"><i class="fas fa-search"></i></Link>
            <Link to="/favourites"><i class="far fa-heart" /></Link>
            <Link to="/plan"><i class="fa fa-calendar-plus"></i></Link>
            <Link to="/history"><i class="fa fa-history"></i></Link>
            <Link to="/profile"><i class="fa fa-user"></i></Link>
        </nav>
    
      <Switch> 
        <Route path="/register">
         <Register user={user} setUser={setUser} showError={updateErrorMessage}/>
        </Route>
        <Route path="/login">
          <Login user={user} setUser={setUser} showError={updateErrorMessage} />
        </Route>


        { user ? 
        
        <>
        <Switch>
        <Route path="/plan">
          <PlanList />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/profile">
          <Profile user={user} setUser={setUser} />
        </Route>
        <Route path="/favourites">
          <FavouritesSearch results = {[]} />
        </Route>
        <Route path="*">
          <Explore />
        </Route> 
        </Switch>
        </>
        
        : 
        
        <Route path="/">
          <Login user={user} setUser={setUser} showError={updateErrorMessage} />
        </Route>
       
       } 
         

      </Switch>
     
    </Router>
  );
}



export default App;
