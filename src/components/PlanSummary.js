import React from "react";

import PlanTimeslots from "./PlanTimeslots";

export default function PlanSummary (props) {
  const { timeslots } = props;

  if (timeslots.length > 0 ) {
  return timeslots.map(timeslot => {
    return <PlanTimeslots key={timeslot.id} {...timeslot} setTimeslots={props.setTimeslots}/>
  });
  } else {
    return <div class="plan-card-empty"><p class="no-plans">Once you add activities to your plan <br></br>they'll appear here</p></div>
  }
}