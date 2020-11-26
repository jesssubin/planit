import React from "react";


 

export default function PlanDates (props) {
  
  console.log("props from plandetails", props)
  console.log("hello")
  
  return (
    <article>
      <div class="w3-card-4">
      <header class="w3-container w3-light-grey">{props.date.slice(0,10)}</header>
        <div class="w3-container">
        <h5>{props.address}</h5>
        <h5>{props.types}</h5>
        </div>
      </div>
    </article>
  )
}