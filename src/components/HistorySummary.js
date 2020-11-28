import React from "react";

import HistoryTimeslots from "./HistoryTimeslots";

export default function HistorySummary (props) {
  const { timeslots } = props;
  console.log("this is timeslots from plan summary",props)

  if (timeslots.length > 0 ) {
  return timeslots.map(timeslot => {
    return <HistoryTimeslots key={timeslot.id} {...timeslot} />
  });
  } else {
    return <p>Once you add activities to your plan they'll appear here"</p>
  }
}