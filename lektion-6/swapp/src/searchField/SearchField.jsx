import React, { useState } from "react";

const SearchField = (props) => {
  const [searchString, setSearchString] = useState("");

  const handleTextChange = (event) => {
      setSearchString(event.target.value);
  }

  const handleButtonClick = () => {
      if(props.onSearch){
          props.onSearch(searchString);
      }
  }
  
  return (
    <div className="searchField">
      <input type="search" value={searchString} onChange={handleTextChange} />
      <button onClick={handleButtonClick}>Search</button>
    </div>
  );
};

export default SearchField;
