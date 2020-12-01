import React, { useEffect, useState } from "react";
import axios from 'axios';
import PlanSummary from "./PlanSummary";
import '../planlist.css';

export default function PlanDetail (props) {
  const [timeslots, setTimeslots] = useState([]); 

  const archivePlan = () => {
    const planData = {
      planId: props.id
    }
    axios.post('/api/plans/archive', planData)
    .then(function(response) {
     
    })
    window.location.reload(false);
  }

  useEffect (() =>{
     const plan = {
       planId: props.id
    }

    axios.post('/api/timeslots/planlist', plan)
    .then(function(response) {
      const results = response.data
      results.map((result) => {
        let end = result.end_time.toString(); 
        let start = result.start_time.toString(); 
        
        const position = -2 
        const startOutput = [start.slice(0, position), ":" , start.slice(position)].join('')
        const endOutput = [end.slice(0, position), ":" , end.slice(position)].join('')

        result.end_time = endOutput; 
        result.start_time = startOutput; 
      })
      setTimeslots([...response.data])
    })
  }, [])
  

  return (
    <div class="plan-list">
    <div class="plan-void"></div>
    <div class="plan-detail">
      <p class="plan-trip-summary">Your Trip Summary for <br></br>{props.date.slice(0,10)}</p>
  <div> <PlanSummary timeslots={timeslots} plan={props.id} setTimeslots={setTimeslots}/> </div>
        <button onClick={archivePlan} class="back-card-buttons">Archive this Plan </button>
        <button onClick={props.toggleDisplay} class="back-card-buttons">Back to all Plans </button>
    </div>
    </div>
  )
}; 