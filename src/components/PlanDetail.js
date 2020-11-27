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
    props.toggleDisplay() 
  }

  useEffect (() =>{
     const plan = {
       planId: props.id
    }
    console.log("PLAN HERE: ", plan)

    axios.post('/api/timeslots/planlist', plan)
    .then(function(response) {
      console.log(response.data)
      setTimeslots([...response.data])
    })
  }, [])
  
  console.log("plan summary sending this;", timeslots)

  return (
    <div>
      <h1>Your Trip Summary for {props.date}</h1>
        <div> <PlanSummary timeslots={timeslots} plan={props.id}/> </div>
        <button onClick={archivePlan} class="w3-button w3-block w3-dark-grey">Archive this Plan </button>
        <button onClick={props.toggleDisplay} class="w3-button w3-block w3-dark-grey">Back to all Plans </button>
    </div>
  )
}; 