import React, { Fragment, useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import ExploreResult from "./ExploreResult";

const axios = require('axios');

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {

    const query="Toronto"; 
    const API_KEY=process.env.REACT_APP_API_KEY; 
   
    const searchURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=AIzaSyARFnA9kzyqcgZmiBHLbc5COInWZlmtcac`

    axios.get(searchURL).then(response => {
      console.log(response);
      setResults([...response.data.results])
    });
  }, [term])

  
  return (
    <Fragment>
     
      <header className="logo">
      </header>
      <main>
        <SearchBar onSearch={term => setTerm(term)}/>
        <ExploreResult results={results} />
      </main>
    </Fragment>
  );
}