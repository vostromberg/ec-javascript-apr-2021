import React from "react";

const FilmListItem = (props) => {
  return (
    <div>
      <h3>{props.film.title}</h3>
      <p>{props.film.release_date}</p>
    </div>
  );
};

export default FilmListItem;
