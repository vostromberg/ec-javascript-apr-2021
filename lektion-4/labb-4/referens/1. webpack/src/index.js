import { v4 } from 'uuid';
import axios from 'axios';
import { helloWorld, javaScriptDoesntCare } from './messages';
import { addParagraphToBody } from './dom-helper';

addParagraphToBody(`${helloWorld}<br>${javaScriptDoesntCare}`);
addParagraphToBody(v4());

async function getFilms() {
  const response = await axios.get('https://swapi.dev/api/films/');
  const list = document.createElement('ul');
  response.data.results.forEach((film) => {
    const listItem = document.createElement('li');
    listItem.innerText = film.title;
    list.appendChild(listItem);
  });
  document.body.appendChild(list);
}

getFilms();