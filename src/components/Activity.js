import React, { useState } from "react";
import axios from 'axios'; 
import ActivityDetails from './ActivityDetails'; 

export default function Activity (props) {
  const [details, setDetails] = useState(false)
  let photoURL = ''
  
  if (props.photos){
    photoURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photos[0].photo_reference}&key=AIzaSyARFnA9kzyqcgZmiBHLbc5COInWZlmtcac`
  } 

  
  const saveActivity = () => {
      // props.showError(null);
      const activityData = {
        "name":props.name,
        "address":props.formatted_address, 
        "types":props.types[0]
      }
      axios.post('/api/activities', activityData)
          .then(function (response) {
              console.log(response.config.data, "response after clicking fav")
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
  

  const onClick = () => {
    saveActivity();
    //console.log(props);
  }

  const showDetails = () => {
    // e.preventDefault();
    return (
        <ActivityDetails {...props} toggleDisplay={() => setDetails(false)}/>

    )
  }
  
  return (
    <article>
      { details ? showDetails() :
      <div class="w3-card-4">
        <img src={photoURL} alt="restaurant" />
        <header class="w3-container w3-light-grey">{props.name} </header>
        <div class="w3-container">
          <h5>{props.rating}</h5>
        </div>
        <button onClick={() => setDetails(true)} class="w3-button w3-block w3-dark-grey">See Details </button>
        <button onClick={onClick} class="w3-button w3-block w3-dark-grey">Add to Favourites </button>
      </div>}
    </article>
  )
}
