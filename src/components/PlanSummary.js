import React from "react";

import PlanTimeslots from "./PlanTimeslots";

export default function PlanSummary (props) {
  const { timeslots } = props;
  console.log("this is timeslots from plan summary", timeslots)

  if (timeslots.length > 0 ) {
  return timeslots.map(timeslot => {
    return <PlanTimeslots key={timeslot.id} {...timeslot} />
  });
  } else {
    return <p>Once you add activities to your plan they'll appear here"</p>
  }
}