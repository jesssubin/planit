import React from "react";

import PlanTimeslots from "./PlanTimeslots";

export default function PlanSummary (props) {
  const { timeslots } = props;
  console.log("this is timeslots from plan summary", timeslots)

  if (timeslots.length > 0 ) {
  return timeslots.map(timeslot => {
    return <PlanTimeslots key={timeslot.id} {...timeslot} setTimeslots={props.setTimeslots}/>
  });
  } else {
    return <p class="no-plans">Once you add activities to your plan <br></br>they'll appear here</p>
  }
}