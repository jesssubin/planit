import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from 'axios'; 
import PlanDetail from "./PlanDetail";
 
import "react-datepicker/dist/react-datepicker.css";

export default function PlanList (props) {
  const [form, setForm] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  
  const showForm = () => {
    console.log("show form: ", startDate)
    return (
      <div> 
       <form id= "add-app">
          <label>Date </label>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          <button onClick={onClick}>Create</button>
        </form>
      </div>
      );
  }
  
  const savePlan = () => {
    const planDate = {
      "date": startDate
    }; //somehow save date in this
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
 

  return (
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
    </div>
  );
}