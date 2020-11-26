import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from 'axios'; 
import PlanDetail from "./PlanDetail";
 
import "react-datepicker/dist/react-datepicker.css";

export default function PlanList (props) {
  const [form, setForm] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  const [state, setState] = useState(""); 

  const handleChange = (event) => {
    const { id, value } = event.target
    setState(prev => ({
      ...prev, 
      [id] : value
    }))
  }

  const showForm = () => {
    console.log("show form: ", startDate)
    return (
      <div> 
       <form id= "add-app">
       <input type="name"
              id="name"
              placeholder="Name your day plan" 
              name="name" 
              value={state.name}
              onChange={handleChange}
               />
          <label>Date </label>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          <button onClick={onClick}>Create</button>
        </form>
      </div>
      );
  }
  
  const savePlan = () => {
    const planDate = {
      "name": state.name,
      "date": startDate
    }; //somehow save date in this
    console.log(planDate)
    axios.post('/api/plans', planDate)
    .then(function(response) {
      console.log("res:", response)
    })
    .catch(function (error) {
      console.log("error:", error);
  }); 
  }

  const onClick = (e) => {
    e.preventDefault();
    savePlan();
  }
 
import React, { useEffect, useState } from "react";
import axios from 'axios';
import PlanResults from "./PlanResults";
import PlanDetail from "./PlanDetail";

export default function PlanList (props) {
  const [plans, setPlans] = useState([]);
  const [planDetails, setPlanDetails] = useState(false);

  useEffect (() => {
    axios.get("/api/plans")
    .then(function(response){
      console.log(response.data, "response data")
      setPlans([...response.data])
    
    });
  }, [])



  const showPlanDetails = () => {
    console.log("show plan details", plans, planDetails)
    const plan = plans.find(plan => plan.id === planDetails)
    return (
        <PlanDetail key={props.key} {...plan} toggleDisplay={() => setPlanDetails(false)}/>
    )
  }
  

  return (
    <article>
    { planDetails ? showPlanDetails() :
    
    <div>
      <button onClick={() => setForm(true)} class="w3-button w3-block w3-dark-grey">Create a new plan!</button>
      
      {form ? showForm() : 
      <div>
        <h1>Plan for <span>Date</span></h1>
        <h3>Tuesday November 17 2020</h3>
        <img></img>
        <h3>Friday November 20 2020</h3>
        <img></img>
        <h3>Monday November 23 2020</h3>
        <img></img>
      </div>}
      <h1>Your Plans</h1>
      <div>
        <PlanResults plans={plans} onClick={(id) => setPlanDetails(id)}/> 
      </div>
    </div>
    }
     </article>
  );
}