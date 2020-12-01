import React, { Fragment, useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import ExploreResult from "./ExploreResult";
import "../liveSearch.css"
const axios = require('axios');

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchData = {params: {search: term}}

  useEffect(() => {
    axios.get("/search", searchData)
    .then(function(response){
      setResults([...response.data.results])
    });
  }, [term]) 
  
  return (
    <Fragment>
      <main class="live-search">
        <div class="searchbar-result">
        <SearchBar onSearch={term => setTerm(term)}/>
        </div>
        <div class="explore-result"> 
        <ExploreResult results={results} />
        </div>
      </main>
    </Fragment>
  );
}