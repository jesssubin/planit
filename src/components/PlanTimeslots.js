import React, { useEffect, useState } from "react";
import axios from 'axios';
import TimeRangeSlider from 'react-time-range-slider';

export default function PlanTimeslots (props) {
  
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
    const timeslotData = {
      id: props.id
    }
    axios.post('/api/timeslots/delete', timeslotData)
    .then(function(response){
    props.setTimeslots((prev) => {
      let index;
      prev.forEach((plan, i) => {
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
    .catch(function (error) {
    });    
    setEdit(false)
  }
  
  return (
    
      <div class="plan-card">
        <div class="plan-card-time">
          <p class="plan-card-time">From: {timeRange.start} </p>
          <p class="plan-card-time">-{timeRange.end}</p>
        </div>
        {edit ?  
        <div class="plan-time-slider-add">
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
        <p class="plan-card-name">{activityInfo[0] ? activityInfo[0].name : null}</p>
    
        <p class="plan-card-address">{activityInfo[0] ? activityInfo[0].address : null}</p>
        <div class="plan-button-bundle">
        { edit ? 
        <button onClick={onClickSubmitEdit} class="plan-card-buttons"> Submit New Time </button>
        :  <button onClick={onClickEdit} class="plan-card-buttons"> Edit Time </button>}
        <button onClick={onClickDelete} class="plan-card-buttons"> Delete </button>
      </div>
    </div>
  
  )

};