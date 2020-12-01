import React from "react";


 

export default function PlanDates (props) {
  
  console.log("props from plandates", props.id)
 

 

  return (
    <article>
      <div class="plan-card-dates">
      <header>{props.date.slice(0,10)}</header>
        <div class="plan-card-name">
          <p>{props.name}</p>
        </div>
        <div>
          <button onClick={props.onClick} class="plan-card-buttons">See Details </button>
        </div>
      </div>
    </article>
  )
}