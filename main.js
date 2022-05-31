import './style.css'
import {getRandomCountry} from './api/index.mjs'

const SELECTED_COLOR = 'salmon'

const country = getRandomCountry();

const title = document.createElement('h3');
title.textContent = `At least not in ${country.name}`; 
document.querySelector('#app').appendChild(title);
if (document.querySelector(`#${country.code}`)) {
  document.querySelector(`#${country.code}`).style.fill = SELECTED_COLOR;
} else if (document.querySelectorAll(`path[name='${country.name}']`).length) {
  Array.from(document.querySelectorAll(`path[name='${country.name}']`))
    .forEach(elt => elt.style.fill = SELECTED_COLOR)
} else {
  Array.from(document.querySelectorAll(`path[class='${country.name}']`))
    .forEach(elt => elt.style.fill = SELECTED_COLOR)
}
