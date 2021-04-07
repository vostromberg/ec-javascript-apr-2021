const fetchFilms = async () => {
  // inställningar för requesten (behövs egentligen inte på GET med fetch())
  const requestOptions = {
    method: "GET",
  };
  
  // result innehåller information om resultatet av requesten
  const result = await fetch("https://swapi.dev/api/films/", requestOptions);
  // om requesten lyckades
  if(result.ok){
    // hantera svaret, i det här fallet läs som JSON
    const films = await result.json();
    return films;
  }
  else{
    throw {
      status: result.status,
      statusText: result.statusText,
    }
  }
};

fetchFilms();
