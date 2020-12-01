import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../history.css"


export default function HistoryTimeslots (props) {
  const [activityInfo, setActivityInfo] = useState({}); 

  useEffect (() =>{
    const activityId = {
      id: props.activity_id
   }
   axios.post('/api/timeslots/history', activityId)
   .then(function(response) {
    setActivityInfo({...response.data})
   })
 }, [props.activity_id])

  
  return ( 
    <div class="history-card">
      <p class="history-card-name">{activityInfo[0] ? activityInfo[0].name : null}</p>
      <p class="history-card-address">{activityInfo[0] ? activityInfo[0].address : null}</p>
      <p>You visited from: {props.start_time} to {props.end_time}</p>
    </div>
  )
  
}