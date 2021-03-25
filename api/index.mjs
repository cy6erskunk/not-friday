import * as luxon from 'luxon';
import {tzNames, getCountriesByTz} from './data.mjs';

const {DateTime} = luxon;

const getRandomCountry = () => {
  const now = DateTime.local()

  const nonFridayTZs = tzNames.filter((tzName) => now.setZone(tzName).weekdayLong !== 'Friday')

  const countriesSet = new Set();

  nonFridayTZs.forEach((tzName) => 
    getCountriesByTz(tzName).
    forEach((countryName) => countriesSet.add(countryName)))

  const countries = Array.from(countriesSet);
  
  return countries[Math.floor(Math.random() * countries.length)]
}
export {getRandomCountry}
