import React, { Fragment, useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import ExploreResult from "./ExploreResult";

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
      <header className="logo">
     
      </header>
      <main>
        <SearchBar onSearch={term => setTerm(term)}/>
        <ExploreResult results={results} />
      </main>
    </Fragment>
  );
}