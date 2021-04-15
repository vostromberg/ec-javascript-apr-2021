import React, { useEffect, useState } from "react";
import filmService from "../filmService/filmService";
import FilmListItem from "./FilmListItem";
import "./FilmList.css";

const FilmList = (props) => {
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    const response = await filmService.getFilms();
    setFilms(response.results);
  };

  useEffect(() => {
    getFilms();
  }, []);

  const handleFilmClicked = (film) => {
    if (props.onFilmSelected) {
      props.onFilmSelected(film);
    }
  };

  const selectedFilmId = props.selectedFilm
    ? props.selectedFilm.episode_id
    : -1;

  const filteredFilms = films.filter((film) => {
    const searchHitIndex = film.title
      .toLowerCase()
      .indexOf(props.searchString.toLowerCase());
    return searchHitIndex > -1;
  });
  return (
    <ul className="filmList">
      {filteredFilms.map((film) => (
        <li
          className={selectedFilmId === film.episode_id ? "selected" : ""}
          key={film.episode_id}
          onClick={() => handleFilmClicked(film)}
        >
          <FilmListItem film={film} />
        </li>
      ))}
    </ul>
  );
};

export default FilmList;
