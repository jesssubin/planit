import React from "react";

import PlanDates from "./PlanDates";

export default function PlanResults (props) {
  const { plans } = props;

  //check if the user has any plans
  if (plans.length > 0) {
    return plans.map(plan => {
      return <PlanDates onClick={() => props.onClick(plan.id)} key={plan.id} {...plan} />
    })
  } else {
    return (
      <div class="no-plans">
        You have no plans. Click above to make one.
      </div>
    )
  }

}