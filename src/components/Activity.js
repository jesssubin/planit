import React from "react";

export default function Activity (props) {
  const API_KEY = process.env.API_KEY
  let photoURL = ''
  
  if (props.photos){
    photoURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photos[0].photo_reference}&key=AIzaSyARFnA9kzyqcgZmiBHLbc5COInWZlmtcac`
  } 

  const onClick = () => {
    console.log(props);
  }
  
  return (
    <article>
      <div class="w3-card-4">
      <img src={photoURL} alt="restaurant"/>
      <header class="w3-container w3-light-grey">{props.name}</header>
      <div class="w3-container">
      <h5>{props.rating}</h5>
      <p>Description goes here </p>
    </div>
    <button onClick={onClick} class="w3-button w3-block w3-dark-grey">Add to Favourites</button>
    </div>
    </article>
  )
}
