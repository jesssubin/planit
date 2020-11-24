import React, { useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register"; 
import Explore from "./components/LiveSearch";
import History from "./components/History"; 
import Profile from "./components/Profile";
import Favourites from "./components/Favourites"; 
import PlanList from "./components/PlanList"; 
import ActivityDetails from "./components/ActivityDetails"; 
import "./App.css"; 


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [errorMessage, updateErrorMessage] = useState(null);
  
  return (
    <Router>
      <div>
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
        <Route path="/activities/1">
          <ActivityDetails 

          />
        </Route>
        <Route path="*">
          <Explore />
        </Route> 
      </Switch>
    </Router>
  );
}



export default App;
