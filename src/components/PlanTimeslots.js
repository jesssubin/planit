import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function PlanTimeslots (props) {
  

 
  //show each activity below {props.name} {props.start/endtime} {props.address}
  return (
    <article>
      <div class="w3-card-4">
        <header class="w3-container w3-light-grey"> </header>
      <div class="w3-container">
        <h5>{props.name}</h5>
        <h5>details</h5>
      </div>
    </div>
  </article>
  )
};