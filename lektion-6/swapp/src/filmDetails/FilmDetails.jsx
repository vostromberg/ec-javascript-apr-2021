import React from "react";

const FilmDetails = (props) => {
  return (
    <section>
      <h3>{props.selectedFilm.title}</h3>
      <p>{props.selectedFilm.opening_crawl}</p>
    </section>
  );
};

export default FilmDetails;
