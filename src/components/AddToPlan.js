
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
    console.log("TELL ME THE TIME: ", time);
  }
    

  console.log("These are your options: ", options) 


  const saveActivity = () => {
    let strtTime = timeRange.start; 
    let startTime = strtTime.replace(":", ".");
    startTime = parseFloat(startTime)
  
    let enTime = timeRange.end; 
    let endTime = enTime.replace(":", ".");
    endTime = parseFloat(endTime);
    // props.showError(null);

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
          console.log(response.config.data, "response from timeslot")
            if(response.status === 200){
              console.log("axios post request has been made successfully", response);
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
    console.log("plan change handler", planId)
    setChosenPlan(planId);
  }
  
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={photoURLDetail} alt="restaurant" />
      <div>
        <label>Date </label>
        <select value={chosenPlan} onChange={(event) => planChangeHandler(event.target.value)}>
          <option key={1000} value="select" selected> Select plans </option>
          {options}
        </select>
        
        <label>Time</label>
        <p>From: {timeRange.start} </p>
        <p>To: {timeRange.end}</p>
        
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
        <button onClick={props.toggleDisplay}>Submit</button>
      </div>
    </div>

  )
}