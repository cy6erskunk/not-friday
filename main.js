import './style.css'
import {getRandomCountry} from './api/index.mjs'

const country = getRandomCountry();

const title = document.createElement('h3');
title.textContent = `At least not in ${country.name}`; 
document.querySelector('#app').appendChild(title);
if (document.querySelector(`#${country.code}`)) {
  document.querySelector(`#${country.code}`).style.fill = 'red';
} else if (document.querySelectorAll(`path[name='${country.name}']`).length) {
  Array.from(document.querySelectorAll(`path[name='${country.name}']`))
    .forEach(elt => elt.style.fill = 'red')
} else {
  Array.from(document.querySelectorAll(`path[class='${country.name}']`))
    .forEach(elt => elt.style.fill = 'red')
}
