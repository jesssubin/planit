import React, { useState } from "react";
import axios from 'axios'; 
import FavouritesToPlan from './FavouritesToPlan'; 

 

export default function Favourites (props) { 
  const [details, setDetails] = useState(false)
  const onClickDelete = () => {
    const favouriteData = {
      'id':props.favourite_id
    }
    axios.post("/api/favourites", favouriteData)
    .then(function(response){
      props.setFavourites( (prev) => {
        let index;

        prev.forEach( (favourite, i) => {
          if (favourite.favourite_id === props.favourite_id) {
            index = i
          }
        })
        const prevCopy = [...prev]

        prevCopy.splice(index, 1)
        return prevCopy
      })
    });
  }

  const showDetails = () => {
    // e.preventDefault();
    return (
        <FavouritesToPlan {...props} toggleDisplay={() => setDetails(false)}/>

    )
  }
  return (
    <article>
      { details ? showDetails() :
      <div class="w3-card-4">
      <header class="w3-container w3-light-grey">{props.name}</header>
        <div class="w3-container">
        <h5>{props.address}</h5>
        <h5>{props.types}</h5>
        </div>
        <button onClick={() => setDetails(true)} class="w3-button w3-block w3-dark-grey"> Add to Plan </button>
        <button onClick={onClickDelete} class="w3-button w3-block w3-dark-grey"> Remove from Favourites </button>
      </div>}
    </article>
  )
}