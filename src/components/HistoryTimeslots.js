import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function HistoryTimeslots (props) {
  const [activityInfo, setActivityInfo] = useState({}); 
  console.log("this is props from hist time", props)

  useEffect (() =>{
    const activityId = {
      id: props.activity_id
   }
   axios.post('/api/timeslots/history', activityId)
   .then(function(response) {
    
    setActivityInfo({...response.data})
   })
 }, [props.activity_id])

    
  console.log(activityInfo)
    return ( 
      <div>
       <h5>{activityInfo[0] ? activityInfo[0].name : null}</h5>
        <h5>{activityInfo[0] ? activityInfo[0].address : null}</h5>

        <p>{props.start_time}</p>
        <p>{props.end_time}</p>
      ------------------------
      </div>

    )
  
}