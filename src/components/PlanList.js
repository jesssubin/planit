import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from 'axios'; 
import PlanDetail from "./PlanDetail";
import PlanResults from "./PlanResults";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import '../planlist.css'

export default function PlanList (props) {
  const [form, setForm] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  const [state, setState] = useState("");
  const [plans, setPlans] = useState([]); 
  const [planDetails, setPlanDetails] = useState(false); 
  const history = useHistory();

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
       <label>Start your adventure!</label>
       <input type="name"
              id="name"
              placeholder="Name your day plan" 
              name="name" 
              value={state.name}
              onChange={handleChange}
               />
          <label>Date </label>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          <button class="create-card-buttons" onClick={onClick}>Create</button>
        </form>
      </div>
      );
  }
  
  // SAVE PLAN TO DATABASE
  const savePlan = () => {
    const planDate = {
      "name": state.name,
      "date": startDate
    }; 
    console.log(planDate)
    
    axios.post('/api/plans/plan', planDate)
    .then(function(response) {
      console.log("res:", response)
      history.push('/'); 
    })
    .catch(function (error) {
      console.log("error:", error);
  }); 
  }

  const onClick = (e) => {
    e.preventDefault();
    savePlan();
  }
 
  useEffect (() => {
    axios.get("/api/plans")
    .then(function(response){
      console.log(response.data, "response data")
      setPlans([...response.data])
    });
  }, [planDetails])

  const showPlanDetails = () => {
    console.log("show plan details", plans, planDetails)
    const plan = plans.find(plan => plan.id === planDetails)
    return (
        <PlanDetail key={props.key} {...plan} toggleDisplay={() => setPlanDetails(false)}/>
    )
  }
console.log("PLANSS!!!!", plans)
return (
  <div>
  { planDetails ? showPlanDetails() :
    <div class="plan-list">
    {form ? showForm() : 
    <div class="plan-result">
      {plans ?    
      <div class="individual-plan">
        <PlanResults plans={plans} onClick={(id) => setPlanDetails(id)}/> 
      </div> : null}
      <button onClick={() => setForm(true)} class="new-plan-btn">Create a new plan!</button>
      </div>
    } 
    </div>
  }
   </div>
  );
}
