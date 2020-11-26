import React from "react";

import PlanDates from "./PlanDates";

export default function PlanResults (props) {
  const { plans } = props;
  console.log(plans, "plan")
  


return plans.map(plan => {
  return <PlanDates onClick={() => props.onClick(plan.id)} key={plan.id} {...plan} />
 })
}