import React, { useEffect, useState } from "react";
import axios from 'axios';
import HistorySummary from "./HistorySummary";

export default function HistoryDetail (props) {
  const [timeslots, setTimeslots] = useState([]); 
  //console.log(props)
  

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
  
  console.log("hist summary sending this;", timeslots)

  return (
    <div>
      <h1>Your Trip Summary for {props.date.slice(0,10)}</h1>
        <div> <HistorySummary timeslots={timeslots} plan={props.id}/> </div>
        <button onClick={props.toggleDisplay} class="w3-button w3-block w3-dark-grey">Back to History </button>
    </div>
  )
}; 