import React from "react";
import Activity from "./Activity";
import axios from 'axios'
 

export default function Favourites (props) {
  
  console.log("fav props", props)
  
  return (
    <article>
      <div class="w3-card-4">
      <header class="w3-container w3-light-grey">{props.name}</header>
        <div class="w3-container">
        <h5>{props.address}</h5>
        <h5>{props.types}</h5>
        </div>
      </div>
    </article>
  )
}