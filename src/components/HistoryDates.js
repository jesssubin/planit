import React from "react";

export default function HistoryDates (props) {
  
  console.log("props from details", props)
  console.log("hello")
  
  return (
    <article>
      <div class="card">
      <header>{props.date.slice(0,10)}</header>
        <div>
        <h5>{props.name} </h5>
        <h5>{props.address}</h5>
        
        <button onClick={props.onClick} class="card-buttons">See Details </button>
        </div>
      </div>
    </article>
  )
}