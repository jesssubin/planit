import React, { useState, useEffect } from "react";
import axios from 'axios'
import FavouritesResult from './FavouritesResult'; 
import "../favouritesSearch.css"

export default function Favourites (props) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios.get("/api/favourites")
    .then(function(response){
      console.log("heyyyyy from the get", response.data); 
      if(Array.isArray(response.data)) {
        setFavourites([...response.data])
      } else {
        setFavourites([]); 
      }
      // setFavourites([...response.data]);
    });
  }, [])

  return (
    <div class="favourites">
      <div class="favourites-void"></div>
      <div class="favourites-result"> 
        <FavouritesResult favourites={favourites} setFavourites={setFavourites}/>
      </div>
    </div>
  )
}
 