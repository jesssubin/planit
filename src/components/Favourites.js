import React from "react";
import Activity from "./Activity";
import axios from 'axios'
 

export default function Favourites (props) { 
 
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
  
  return (
    <article>
      <div class="w3-card-4">
      <header class="w3-container w3-light-grey">{props.name}</header>
        <div class="w3-container">
        <h5>{props.address}</h5>
        <h5>{props.types}</h5>
        </div>
        </div>
        <button onClick={onClickDelete} class="w3-button w3-block w3-dark-grey"> Remove from Favourites </button>
      
    </article>
  )
}