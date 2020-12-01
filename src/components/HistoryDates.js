import React from "react";
import "../history.css"

export default function HistoryDates (props) {
  
  return (
    <article>
      <div class="history-card">
      <header>{props.date.slice(0,10)}</header>
        <div class="history-card-name">
          <p>{props.name}</p>
        </div>
        <div>
          <button onClick={props.onClick} class="history-card-buttons">See Details </button>
        </div>
      </div>
    </article>
  )
}