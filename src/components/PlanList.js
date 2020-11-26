import React, { useEffect, useState } from "react";
import axios from 'axios';
import PlanResults from "./PlanResults";

export default function PlanList (props) {
  const [plans, setPlans] = useState([]);

  useEffect (() =>{
    axios.get("/api/plans")
    .then(function(response){
      console.log(response.data, "response data")
      setPlans([...response.data])
    
    });
  }, [])
console.log(plans, "planslist")

  return (
    <div>
      <h1>Plan for <span>Date</span></h1>
      <div>
        <PlanResults plans={plans} /> 
      </div>
    </div>
  );
}