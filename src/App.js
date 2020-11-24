import React, { useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register"; 
import Explore from "./components/LiveSearch";
import History from "./components/History"; 
import Profile from "./components/Profile";
import Favourites from "./components/Favourites"; 
import PlanList from "./components/PlanList"; 

import "./App.css"; 


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
      <div>
       <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet" />
       <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <nav class="nav-bar">
            <Link to="/"><i class="fas fa-search"></i></Link>
            <Link to="/user/1/favourites"><i class="far fa-heart" /></Link>
            <Link to="/user/1/plan"><i class="fa fa-calendar-plus"></i></Link>
            <Link to="/user/1/history"><i class="fa fa-history"></i></Link>
            <Link to="/user/1/profile"><i class="fa fa-user"></i></Link>
        </nav>
      </div>
      
      <Switch> 
        <Route path="/register">
         <Register showError={updateErrorMessage}/>
        </Route>
        <Route path="/login">
          <Login showError={updateErrorMessage} />
        </Route>
        <Route path="/user/1/plan">
          <PlanList />
        </Route>
        <Route path="/user/1/history">
          <History />
        </Route>
        <Route path="/user/1/profile">
          <Profile />
        </Route>
        <Route path="/user/1/favourites">
          <Favourites results = {[]} />
        </Route>
        <Route path="*">
          <Explore />
        </Route> 
      </Switch>
    </Router>
  );
}



export default App;
