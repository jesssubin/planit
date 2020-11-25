import React, { useState } from "react";
import axios from 'axios'; 

export default function ActivityDetails (props) {

  const [isFavorite, setIsFavorite] = useState(false); 

   const toggleFavourites = function () {
     //call api with axios to save favorite 

     //.then 
     setIsFavorite(!isFavorite)
   }
   
   const favoriteClass = isFavorite? "far fa-heart" : "fas fa-heart"
  
  console.log("from activitydetails:",props)
  let photoURLDetail = ''
  
  if (props.photos){
    photoURLDetail = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photos[0].photo_reference}&key=AIzaSyARFnA9kzyqcgZmiBHLbc5COInWZlmtcac`
  } 
  return (
 
    <div class="w3-card-4">
      <img src={photoURLDetail} alt="restaurant"/>
      <header class="w3-container w3-light-grey">{props.name}</header>
      <div class="w3-container">
        <h5>{props.rating}</h5>
        <p>{props.description} </p>
        <p>{props.formatted_address} </p>
      </div>
      <button><i className={favoriteClass} onClick={toggleFavourites} /></button>
      <button><i className="fa fa-calendar-plus"/></button>  
      {/* <button onClick={onClick} class="w3-button w3-block w3-dark-grey">Add to Favourites</button> */}
      <button onClick={() => props.toggleDisplay()} class="w3-button w3-block w3-dark-grey">Back </button>
    </div>

  )
}