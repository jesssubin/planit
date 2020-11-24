import axios from "axios";
import React, { useState, useEffect, useCallback }from "react";
import useDebounce from "../../src/hooks/useDebounce";

export default function SearchBar (props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);
  console.log(term, "This is a term wow")
  const onSearch = useCallback(props.onSearch, [term]);
  console.log(onSearch, "Yikies onSearch here yee haw")
  console.log(props, "This is props")

  const searchData = {params: {search: term}}
 
  useEffect(() => {
    axios.get("/search", searchData)
  .then(function(response){
    console.log(response.data.results, "response data")
    //  setValue({
    //      result: response.data
    //  })
    });
  }, [term, onSearch]);

  return (
    <div>
      <h1>Explore</h1>
      <section className="search">
        <form className="search__form" onSubmit={event => event.preventDefault()}>
          <input
            className="radius"
            spellCheck="false"
            placeholder="Search Activities"
            name="search"
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </form>
      </section>
    </div>
  );
}