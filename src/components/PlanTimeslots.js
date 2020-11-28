import React, { useEffect, useState } from "react";
import axios from 'axios';
import TimeRangeSlider from 'react-time-range-slider';

export default function PlanTimeslots (props) {
  console.log("props from plantimeslot", props)
  const [activityInfo, setActivityInfo] = useState({}); 
  const [edit, setEdit] = useState(false)
  const [startTime, setStartTime] = useState(props.start_time)
  const [endTime, setEndTime] = useState(props.end_time)
  

  const [timeRange, setTimeRange] = useState({
    start: startTime,
    end: endTime
  });
 
  useEffect (() => {
    setStartTime(timeRange.start)
    setEndTime(timeRange.end)
  }, [edit])


  const onClickEdit = () => {
    setEdit(true)
  }

  const onClickDelete = () => {
    console.log("clickdelter", props.id)
    const timeslotData = {
      id: props.id
    }
    axios.post('/api/timeslots/delete', timeslotData)
    .then(function(response){
    props.setTimeslots((prev) => {
      let index;
      console.log(prev, "this is prec")
      prev.forEach((plan, i) => {
        console.log(plan.id, props.id, "this is if")
        if (plan.id === props.id) {
          index = i
        }
      })
      const prevCopy = [...prev]

      prevCopy.splice(index, 1)
      return prevCopy
    })
  });
    
  }

  useEffect (() =>{
    const activityId = {
      id: props.activity_id
   }
   axios.post('/api/timeslots/activities', activityId)
   .then(function(response) {
    
    setActivityInfo({...response.data})
   })
 }, [props.activity_id])

 const changeStartHandler = (time) => {
   
}

const timeChangeHandler = (time) => {
  setTimeRange(time);
}

const changeCompleteHandler = (time) => {
  
}
const onClickSubmitEdit = () => {
  let strtTime = timeRange.start; 
  let startTime = strtTime.replace(":", ".");
  startTime = parseFloat(startTime) * 100
  startTime = Math.round(startTime); 

  let enTime = timeRange.end; 
  let endTime = enTime.replace(":", ".");
  endTime = parseFloat(endTime) * 100;
  endTime = Math.round(endTime); 
  const timeslotData = {
    "id":props.id,
    "start_time": startTime,
    "end_time": endTime
  }
  axios.post('/api/timeslots/update', timeslotData)
  .then(function (response) {
    console.log(response.config.data, "response from timeslot")
  })
  .catch(function (error) {
    console.log(error);
  });    
  setEdit(false)
}
  
  return (
    <article>
      <div class="w3-card-4">
        <header class="w3-container w3-light-grey"> </header>
      <div class="w3-container">

        <h5>Start: {timeRange.start}</h5>
        <h5>End: {timeRange.end}</h5>
        {edit ?  
        <div>
            <TimeRangeSlider
              disabled={false}
              format={24}
              maxValue={"23:59"}
              minValue={"00:00"}
              name={"time_range"}
              onChangeStart={time => changeStartHandler(time)}
              onChangeComplete={time => changeCompleteHandler(time)}
              onChange={time => timeChangeHandler(time)}
              step={15}
              value={timeRange}/>
        </div> : null }
        <h5>{activityInfo[0] ? activityInfo[0].name : null}</h5>
        <h5>{activityInfo[0] ? activityInfo[0].address : null}</h5>
        { edit ? 
        <button onClick={onClickSubmitEdit} class="w3-button w3-block w3-dark-grey"> Submit New Time </button>
        :  <button onClick={onClickEdit} class="w3-button w3-block w3-dark-grey"> Edit Time </button>}
        <button onClick={onClickDelete} class="w3-button w3-block w3-dark-grey"> Delete </button>
      </div>
    </div>
  </article>
  )

};