import React from "react";

import HistoryDates from "./HistoryDates";

export default function HistoryResults (props) {
  const { history } = props;
 
  return history.map(elem => {
    return <HistoryDates onClick={() => props.onClick(elem.id)} key={elem.id} {...elem} />
  })
}