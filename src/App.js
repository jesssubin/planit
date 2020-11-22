import React from "react";

import Login from "./components/Login";
import Register from "./components/Register"; 
import Explore from "./components/Explore";
import History from "./components/History"; 
import Profile from "./components/Profile";
import Favourites from "./components/Favourites"; 
import PlanList from "./components/PlanList"; 

import "./App.css"; 


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav class="nav-bar">
            <button onClick={<Explore />}><i class="fa fa-search"></i></button>
            <button onClick={<Favourites />}><i class="fa fa-heart"></i></button>
            <button onClick={<PlanList />}><i class="fa fa-calendar-plus"></i></button>
            <button onClick={<History />}><i class="fa fa-history"></i></button>
            <button onClick={<Profile />}><i class="fa fa-user"></i></button>
        </nav>
      </div>
      
      <Switch> 
        <Route path="/register">
         <Register />
        </Route>
        <Route path="/login">
          <Login />
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
        <Route path="/">
          <Explore />
        </Route> 
      </Switch>
    </Router>
  );
}



export default App;
