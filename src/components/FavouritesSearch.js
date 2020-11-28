import React, { useState, useEffect } from "react";
import axios from 'axios'
import FavouritesResult from './FavouritesResult'; 

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
    <FavouritesResult favourites={favourites} setFavourites={setFavourites}/>
  )
}
 