import React, { Fragment, useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import ExploreResult from "./ExploreResult";

const axios = require('axios');

export default function LiveSearch(props) {
  const [term, setTerm] = useState("squidward");
  const [results, setResults] = useState([]);

  useEffect(() => {
    // const testURL = `https://itunes.apple.com/search?term=${term}&country=CA&media=music&entity=album&attribute=artistTerm`
    // ; 
    const searchURL = `https://test.api.amadeus.com/v1/shopping/activities?latitude=41.397158&longitude=2.160873&radius=1`

    axios.get(searchURL).then(response => {
      console.log(response);
      setResults([...response.data.results])
    });
  }, [term])

  
  return (
    <Fragment>
      <header className="logo">
        {/* <img src="images/brand.png" alt="Brand" /> */}
      </header>
      <main>
        <SearchBar onSearch={term => setTerm(term)}/>
        <ExploreResult results={results} />
      </main>
    </Fragment>
  );
}