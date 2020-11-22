import React, { useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register"; 
import Explore from "./components/LiveSearch";
import History from "./components/History"; 
import Profile from "./components/Profile";
import Favourites from "./components/Favourites"; 
import PlanList from "./components/PlanList"; 

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Explore</Link>
            </li>
            <li>
              <Link to="/">Favorites</Link>
            </li>
            <li>
              <Link to="/">Plan</Link>
            </li>
            <li>
              <Link to="/">History</Link>
            </li>
            <li>
              <Link to="/">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <Switch> 
        <Route path="/register">
         <Register showError={updateErrorMessage}/>
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
        <Route path="*">
          <Explore />
        </Route> 
      </Switch>
    </Router>
  );
}



export default App;
