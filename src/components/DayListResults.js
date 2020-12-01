import React from "react";

import AddToPlan from "./AddToPlan";

export default function DayListResults (props) {
  
  const { daylist } = props;

  return daylist.map(daylist => {
    return <AddToPlan key={daylist.user_id} {...daylist} />;
  });
}