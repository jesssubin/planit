import React, { useEffect, useState } from "react";
import axios from 'axios';
import PlanResults from "./PlanResults";
import PlanDetail from "./PlanDetail";

export default function PlanList (props) {
  const [plans, setPlans] = useState([]);
  const [planDetails, setPlanDetails] = useState(false);

  useEffect (() => {
    axios.get("/api/plans")
    .then(function(response){
      console.log(response.data, "response data")
      setPlans([...response.data])
    
    });
  }, [])



  const showPlanDetails = () => {
    console.log("show plan details", plans, planDetails)
    const plan = plans.find(plan => plan.id === planDetails)
    return (
        <PlanDetail key={props.key} {...plan} toggleDisplay={() => setPlanDetails(false)}/>
    )
  }
  

  return (
    <article>
    { planDetails ? showPlanDetails() :
    
    <div>
      <h1>Plan for <span>Date</span></h1>
      <div>
        <PlanResults plans={plans} onClick={(id) => setPlanDetails(id)}/> 
      </div>
    </div>
    }
     </article>
  );
}