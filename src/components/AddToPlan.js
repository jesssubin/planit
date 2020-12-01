import React, { useState, useEffect } from "react";
import { render} from 'react-dom';
import axios from 'axios'; 
import TimeRangeSlider from 'react-time-range-slider';
import '../addToPlan.css'
   
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
    startTime = Math.round(startTime)
  
    let enTime = timeRange.end; 
    let endTime = enTime.replace(":", ".");
    endTime = parseFloat(endTime) * 100;
    endTime = Math.round(endTime)

    let planId = parseFloat(chosenPlan);
    
    const activityData = {
      "name":props.name,
      "address":props.formatted_address, 
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

  let photoURLDetail = ''
  if (props.photos){
    photoURLDetail = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=275&photoreference=${props.photos[0].photo_reference}&key=AIzaSyARFnA9kzyqcgZmiBHLbc5COInWZlmtcac`
  } 

  const planChangeHandler = (planId) => {
    setChosenPlan(planId);
  }
  
  return (
    <div div class="add-card">
      <img class="add-card-image" src={photoURLDetail} alt="pic" />
      <div class="card-name">
         <strong>{props.name}</strong>
      </div>
      <div class="favorites-card-plan">
        <select class="select-plan" value={chosenPlan} onChange={(event) => planChangeHandler(event.target.value)}>
          <option key={1000} value="select" selected> Select plans </option>
          {options}
        </select>
       </div> 
       <div class= "time-display-add">
        <p class="add-from-time">From: {timeRange.start} </p>
        <p class="add-to-time">To: {timeRange.end}</p>
        </div>
        <div class="time-slider-add">
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
        <button class="add-card-buttons" onClick={onClick}>Submit</button>    
    </div>
  )
}