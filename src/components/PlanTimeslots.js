import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function PlanTimeslots (props) {
  console.log("props from plantimeslot", props)
  const [activityInfo, setActivityInfo] = useState({}); 

  const onClickEdit = () => {

  }

  const onClickDelete = () => {
    console.log("clickdelter", props.id)
    const timeslotData = {
      id: props.id
    }
    axios.post('/api/timeslots/delete', timeslotData)
    .then(function(response) {
       console.log("delete res", response)
    })
    
  }

  useEffect (() =>{
    const activityId = {
      id: props.activity_id
   }
   axios.post('/api/timeslots/activities', activityId)
   .then(function(response) {
     console.log("activty.data fro mtimselots: ", response.data)
    setActivityInfo({...response.data})
   })
 }, [])
 console.log("this is activity info", activityInfo)
 

  
  return (
    <article>
      <div class="w3-card-4">
        <header class="w3-container w3-light-grey"> </header>
      <div class="w3-container">

        <h5>Start: {props.start_time}</h5>
        <h5>End: {props.end_time}</h5>
   
        <h5>{activityInfo[0] ? activityInfo[0].name : null}</h5>
        <h5>{activityInfo[0] ? activityInfo[0].address : null}</h5>

        <button onClick={onClickEdit} class="w3-button w3-block w3-dark-grey"> Edit </button>
        <button onClick={onClickDelete} class="w3-button w3-block w3-dark-grey"> Delete </button>
      </div>
    </div>
  </article>
  )

};