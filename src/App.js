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
        <nav class="nav-bar">
            <a href="/"><button><i class="fas fa-search" onClick={<Explore />} /></button></a>
            <a href="/user/1/favourites"><button><i class="far fa-heart" onClick={<Favourites />} /></button></a>
            <a href="/user/1/plan"><button><i class="fa fa-calendar-plus" onClick={<PlanList />} /></button></a>
  <a href="/user/1/history"><button><i class="fa fa-history" onClick={<History />} /></button></a>
            <a href="/user/1/profile"><button><i class="fa fa-user" onClick={<Profile />} /></button></a>
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
          <Favourites />
        </Route>
        <Route path="/activities/1">
          <ActivityDetails />
        </Route>
        <Route path="*">
          <Explore />
        </Route> 
      </Switch>
    </Router>
  );
}



export default App;
