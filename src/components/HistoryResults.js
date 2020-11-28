import React from "react";

import HistoryDates from "./HistoryDates";

export default function HistoryResults (props) {
  const { history } = props;
   console.log(history[0], "hist")
  


return history.map(elem => {
  return <HistoryDates onClick={() => props.onClick(elem.id)} key={elem.id} {...elem} />
 })
}