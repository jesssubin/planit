import React, { useEffect, useState } from "react";
import axios from 'axios';
import PlanSummary from "./PlanSummary";

export default function PlanDetail (props) {
  const [timeslots, setTimeslots] = useState([]); 
  //console.log(props)
  

  const archivePlan = () => {
    const planData = {
      planId: props.id
    }
    axios.post('/api/plans/archive', planData)
    .then(function(response) {
       
    })
    //props.toggleDisplay() 
    window.location.reload(false);
  }

  useEffect (() =>{
     const plan = {
       planId: props.id
    }
    console.log("PLAN HERE: ", plan)

    axios.post('/api/timeslots/planlist', plan)
    .then(function(response) {
      console.log(response.data, "planlist DATA")
      const results = response.data
      results.map((result) => {
        let end = result.end_time.toString(); 
        let start = result.start_time.toString(); 
        
        const position = -2 
        const startOutput = [start.slice(0, position), ":" , start.slice(position)].join('')
        const endOutput = [end.slice(0, position), ":" , end.slice(position)].join('')

        result.end_time = endOutput; 
        result.start_time = startOutput; 
        console.log(startOutput, endOutput, "this is in results MAP")
      })
      setTimeslots([...response.data])
    })
  }, [])
  

  return (
    <div class="plan-list">
    <div class="plan-detail">
      <p class="plan-trip-summary">Your Trip Summary for <br></br>{props.date.slice(0,10)}</p>
  <div> <PlanSummary timeslots={timeslots} plan={props.id} setTimeslots={setTimeslots}/> </div>
        <button onClick={archivePlan} class="plan-card-buttons">Archive this Plan </button>
        <button onClick={props.toggleDisplay} class="plan-card-buttons">Back to all Plans </button>
    </div>
    </div>
  )
}; 