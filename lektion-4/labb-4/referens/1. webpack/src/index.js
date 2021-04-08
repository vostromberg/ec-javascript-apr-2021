import { helloWorld, javaScriptDoesntCare } from './messages';

const element = document.createElement('p');

element.innerHTML = `${helloWorld}<br>${javaScriptDoesntCare}`;

document.body.appendChild(element);
