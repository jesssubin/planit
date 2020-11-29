import React, { useState, useEffect, useCallback }from "react";
import useDebounce from "../../src/hooks/useDebounce";
import "../searchbar.css"

export default function SearchBar (props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);
  const onSearch = useCallback(props.onSearch, [term]);
 
  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <div class="search-file">
      <section class="search-section">
        <form className="search__form" onSubmit={event => event.preventDefault()}>
          <input
            class="search-input"
            spellCheck="false"
            placeholder="Search Here"
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