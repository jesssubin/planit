import React from "react";

import HistoryDetails from "./HistoryDetails";

export default function HistoryResults (props) {
  const { history } = props;
   console.log(history[0], "hist")
  


return history.map(plan => {
  return <HistoryDetails key={plan.id} {...plan} />
 })
}