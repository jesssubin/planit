
import React, { useState, setTimeRange, useEffect } from "react";
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
    console.log("TELL ME THE TIME: ", time);
  }

  const options = plan.map(plan => <option key={plan.id} value={plan.id} >{plan.name}</option>)
  
  const saveTimespot = () => {
    let strtTime = timeRange.start; 
    let startTime = strtTime.replace(":", ".");
    startTime = parseFloat(startTime)
  
    let enTime = timeRange.end; 
    let endTime = enTime.replace(":", ".");
    endTime = parseFloat(endTime);
    
    const timespot = {
      "plan": plan.id,
      "start_time": startTime,
      "end_time": endTime,
      "activity": timeRange
    }; 
    console.log(timespot)
    console.log(timeRange)
    
    axios.post('/api/timeslots/timeslot', timespot)
    .then(function(response) {
      console.log("res:", response)
    })
    .catch(function (error) {
      console.log("error:", error);
  }); 
  }

  const saveActivity = () => {
    // props.showError(null);
    const activityData = {
      "name":props.name,
      "address":props.formatted_address, 
      "types":props.types[0]
    }
    axios.post('/api/timeslots', activityData)
        .then(function (response) {
            console.log(response.config.data, "response from timeslot")
            if(response.status === 200){
              console.log("axios post request has been made successfully");
                // setState(prevState => ({
                //     ...prevState,
                //     'successMessage' : 'Registration successful. Redirecting to home page..'
                // }))
                //props.showError(null)
            } else{  
                //props.showError("Some error ocurred");
            }
        })
        .catch(function (error) {
            console.log(error);
        });    
}
  // const onClick = () => {
  //   saveActivity();
  //   //console.log(props);
  // }

  const onClick = (e) => {
    e.preventDefault();
    console.log("before click")
    saveActivity();
    // saveTimespot();
    console.log("after click")
  }
  
  const toggleFavourites = function () {
     //call api with axios to save favorite 
     //.then 
    setIsFavorite(!isFavorite)
  }
   
  const favoriteClass = isFavorite? "far fa-heart" : "fas fa-heart"


  let photoURLDetail = ''
  if (props.photos){
    photoURLDetail = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photos[0].photo_reference}&key=AIzaSyARFnA9kzyqcgZmiBHLbc5COInWZlmtcac`
  } 

  const planChangeHandler = (planId) => {
    console.log(planId)
    setChosenPlan(planId);
  }
  
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={photoURLDetail} alt="restaurant" />
      <div>
        <label>Date </label>
        <select onChange={chosenPlan => planChangeHandler(chosenPlan)}>
          {options}
        </select>
        
        <label>Time</label>
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
        </div>
        <button onClick={onClick}>Submit</button>
      </div>
    </div>

  )
}