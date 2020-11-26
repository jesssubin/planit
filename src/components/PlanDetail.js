import React from "react";
import axios from 'axios';

export default function PlanDetail (props) {
  console.log(props, "detail plan - want only 1 here")

  const archivePlan = () => {
    const planData = {

    }
    axios.post('/api/plans', )
  }

  return (
    <div>
      <h1>Your Trip Summary</h1>
        <h3>{props.date}</h3>
        <button onClick={archivePlan} class="w3-button w3-block w3-dark-grey">Archive this Plan </button>
        <button onClick={props.toggleDisplay} class="w3-button w3-block w3-dark-grey">Back to all Plans </button>
    </div>
  )
}; 