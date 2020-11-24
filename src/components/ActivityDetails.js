import React from "react";

export default function ActivityDetails (props) {
  const API_KEY = process.env.API_KEY
  const photoURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photos[0].photo_reference}&key=${API_KEY}`
  
  return (
    <div>
      <img src={photoURL} alt="activity"/>
      <h2>{props.name}</h2>
      <h5>{props.rating}</h5>
      
    </div>
  )
}