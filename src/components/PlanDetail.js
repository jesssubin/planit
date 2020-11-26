import React from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function PlanDetail (props) {
  console.log(props, "detail plan - want only 1 here")

  

  const archivePlan = () => {
    const planData = {
      planId: props.id
    }
    axios.post('/api/plans', planData)
    .then(function(response) {
       
    })
    props.toggleDisplay() 
  }

 

  return (
    <div>
      <h1>Your Trip Summary for {props.date}</h1>
        
        <button onClick={archivePlan} class="w3-button w3-block w3-dark-grey">Archive this Plan </button>
        <button onClick={props.toggleDisplay} class="w3-button w3-block w3-dark-grey">Back to all Plans </button>
    </div>
  )
}; 