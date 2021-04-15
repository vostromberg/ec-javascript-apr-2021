import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchField from "./searchField/SearchField";
import FilmList from "./filmList/FilmList";
import FilmDetails from "./filmDetails/FilmDetails";
import AutoSearchField from "./autoSearch/AutoSearchField";

function App() {
  const [selectedFilm, setSelectedFilm] = useState();
  const [searchString, setSearchString] = useState();

  return (
    <div className="App">
      <aside className="leftContent">
        <h2>Films</h2>
        <label>Manual search</label>
        <SearchField onSearch={setSearchString} /> <br />
        <label>Auto search</label>
        <AutoSearchField onSearch={setSearchString} searchString={searchString} />
        <p>
          Showing films for searchstring: <strong>{searchString}</strong>
        </p>
        <FilmList
          searchString={searchString}
          selectedFilm={selectedFilm}
          onFilmSelected={setSelectedFilm}
        />
      </aside>
      <main className="rightContent">
        <h2>Film Details</h2>
        {selectedFilm && <FilmDetails selectedFilm={selectedFilm} />}
      </main>
    </div>
  );
}

export default App;
