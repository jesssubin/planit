import React from "react";


 

export default function PlanDates (props) {
  
  console.log("props from plandates", props.id)
 

 

  return (
    <article>
      <div class="w3-card-4">
      <header class="w3-container w3-light-grey">{props.date.slice(0,10)}</header>
        <div class="w3-container">
        <h5>{props.address}</h5>
        <button onClick={props.onClick} class="w3-button w3-block w3-dark-grey">See Details </button>
        </div>
      </div>
    </article>
  )
}