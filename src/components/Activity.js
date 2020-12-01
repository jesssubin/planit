import React, { useState } from "react";
import axios from 'axios'; 
import AddToPlan from './AddToPlan'; 
import '../cards.css'

export default function Activity (props) {
  const [details, setDetails] = useState(false)
  let photoURL = ''
  
  if (props.photos){
    photoURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=275&photoreference=${props.photos[0].photo_reference}&key=AIzaSyARFnA9kzyqcgZmiBHLbc5COInWZlmtcac`
  } 

  const saveActivity = () => {
    const activityData = {
      "name":props.name,
      "address":props.formatted_address, 
      "types":props.types[0]
    }
    axios.post('/api/activities', activityData)
    .then(function (response) {
    })
    .catch(function (error) {   
    });    
  }
  
  const onClick = () => {
    saveActivity();
  }

  //toggle to add to plan card when user clicks add to plan button
  const showDetails = () => {
    return (
      <AddToPlan {...props} toggleDisplay={() => setDetails(false)}/>
    )
  }
  
  return (
    <article>
      { details ? showDetails() :
      <div class="card">
        <div >
        <img class="card-image" src={photoURL} alt="pic" />
        </div>
        <div class="card-name">
         <strong>{props.name}</strong>
        </div>
        <div class="card-rating">
          Rating: {props.rating}/&#9733;&#9733;&#9733;&#9733;&#9733;
        </div>
        <div class="button-bundle">
        <button onClick={() => setDetails(true)} class="card-buttons"> Add to Plan </button>
        <button onClick={onClick} class="card-buttons">Add to Favourites </button>
        </div>
      </div>}
    </article>
  )
}
