const baseUrl = "https://swapi.dev/api";

const filmService = {
  getFilms: async () => {
    const response = await fetch(`${baseUrl}/films/`);
    const films = await response.json();
    return films;
  },
};

export default filmService;
