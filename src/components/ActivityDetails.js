import Axios from 'axios';
import React, { useState } from "react";
import axios from "axios"; 

export default function ActivityDetails (props) {
 
  const photos = props.photos 
  // const photoURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photos[0].photo_reference}&key=AIzaSyARFnA9kzyqcgZmiBHLbc5COInWZlmtcac`
  
  const [isFavorite, setIsFavorite] = useState(false); 

  const toggleFavourites = function () {
    //call api with axios to save favorite 

    //.then 
    setIsFavorite(!isFavorite)
  }

  const favoriteClass = isFavorite? "far fa-heart" : "fas fa-heart"


  return (
    <div class="activity-details">
      <div>
        <h2>{props.name}</h2>
        <h5>{props.rating}</h5>        
      </div>
      <div>
        <button><i className={favoriteClass} onClick={toggleFavourites} /></button>
        <button><i className="fa fa-calendar-plus"/></button>
      </div>
      <div>
        {props.description}
      </div>
    </div>
  )
}