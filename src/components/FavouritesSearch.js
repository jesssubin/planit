import React, { useState, useEffect } from "react";
import Activity from "./Activity";
import axios from 'axios'
import FavouritesResult from './FavouritesResult'; 

export default function Favourites (props) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios.get("/api/favourites")
    .then(function(response){
      setFavourites([...response.data]);
    });
  }, [])

  return (
    <FavouritesResult favourites={favourites} />
  )
}
 