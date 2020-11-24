import React from "react";
import Activity from "./Activity";

export default function Favourites (props) {
  const { results } = props;
  
  return results.map(activity => {
    return <Activity key={activity.place_id} {...activity} />;
  });
}