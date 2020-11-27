import React from "react";

import PlanTimeslots from "./PlanTimeslots";

export default function PlanSummary (props) {
  const { timeslots } = props;

  return timeslots.map(activity => {
    return <PlanTimeslots key={activity.place_id} {...activity} />
  });
}