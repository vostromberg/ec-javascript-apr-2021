import React, { useState } from "react";

const AutoSearchField = (props) => {

  const handleTextChange = (event) => {
    if(props.onSearch){
        props.onSearch(event.target.value);
    }
  }
  
  return (
    <div className="searchField">
      <input type="search" value={props.searchString} onChange={handleTextChange} />
    </div>
  );
};

export default AutoSearchField;
