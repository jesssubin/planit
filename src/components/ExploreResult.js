import React from "react";

import Activity from "./Activity";

export default function ExploreResult (props) {
  const { results } = props;

  return results.map(activity => {
    return <Activity key={activity.place_id} {...activity} />;
  });
}