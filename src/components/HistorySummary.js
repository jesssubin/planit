import React from "react";

import HistoryTimeslots from "./HistoryTimeslots";

export default function HistorySummary (props) {
  const { timeslots } = props;
  console.log("this is timeslots from plan summary",props)

  
  return timeslots.map(timeslot => {
    return <HistoryTimeslots key={timeslot.id} {...timeslot} />
  });
 
}