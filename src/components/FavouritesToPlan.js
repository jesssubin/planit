
import React, { useState, useEffect } from "react";
import { render} from 'react-dom';
import axios from 'axios'; 
import TimeRangeSlider from 'react-time-range-slider';

   
export default function AddToPlan (props) {

  const [isFavorite, setIsFavorite] = useState(false);
  const [plan, setPlan] = useState([]);  

  const [timeRange, setTimeRange] = useState({
        start: "00:00",
        end: "23:59"
  });

  const [chosenPlan, setChosenPlan] = useState()
  const options = plan.map(plan => <option key={plan.id} value={plan.id}>{plan.name}</option>)
  
  useEffect(() => {
    axios.get("/api/plans")
    .then(function(response){
     
      setPlan([...response.data])
    });

  
  }, [])  

  const changeStartHandler = (time) => {
   
  }

  const timeChangeHandler = (time) => {
    setTimeRange(time);
  }

  const changeCompleteHandler = (time) => {
  }

  const saveActivity = () => {
    let strtTime = timeRange.start; 
    let startTime = strtTime.replace(":", ".");
    startTime = parseFloat(startTime) * 100
    startTime = Math.round(startTime); 

    let enTime = timeRange.end; 
    let endTime = enTime.replace(":", ".");
    endTime = parseFloat(endTime) * 100;
    endTime = Math.round(endTime); 

    let planId = parseFloat(chosenPlan);
    
    const activityData = {
      "name":props.name,
      "address":props.address, 
      "types":props.types[0],
      "plan": planId,
      "start_time": startTime,
      "end_time": endTime
    }
    axios.post('/api/timeslots', activityData)
    .then(function (response) {
    })
    .catch(function (error) {
    });    
}

  const onClick = (e) => {
    e.preventDefault();
    saveActivity();
    props.toggleDisplay()
  }
  
  const toggleFavourites = function () {
    setIsFavorite(!isFavorite)
  }
   
  const favoriteClass = isFavorite? "far fa-heart" : "fas fa-heart"


  const planChangeHandler = (planId) => {
    setChosenPlan(planId);
  }
  
  return (
    <div class="favorites-card">
      <div class="favorites-card-name">
      <p>{props.name}</p>
      </div>
      <div class="favorites-card-plan">
        <select class="select-favourites" value={chosenPlan} onChange={(event) => planChangeHandler(event.target.value)}>
          <option key={1000} value="select" selected> Select plans </option>
          {options}
        </select>
      </div>
       <div class= "time-display-favourites">
       
        <p class="from-time">From: {timeRange.start} </p>
        <p class="to-time">To: {timeRange.end}</p>
        </div>
        <div class="time-slider-favourites">
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
        </div>
        <button class="favorites-card-buttons" onClick={onClick}>Submit</button>
    </div>

  )
}