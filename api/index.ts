import {DateTime} from 'luxon';
import { VercelRequest, VercelResponse } from '@vercel/node'
import {tzNames, getCountriesByTz} from './data';

const now = DateTime.local()

const nonFridayTZs = tzNames.filter((tzName) => now.setZone(tzName).weekdayLong !== 'Friday')

const countriesSet = new Set();

nonFridayTZs.forEach((tzName) => 
  getCountriesByTz(tzName).
  forEach((countryName) => countriesSet.add(countryName)))

const countries = Array.from(countriesSet);
const randomCountry = countries[Math.floor(Math.random() * countries.length)]

export default (request: VercelRequest, response: VercelResponse) => {
  response.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, s-maxage=10')
  response.setHeader('Pragma', 'no-cache');
  response.setHeader('Expires', '0');
  response.setHeader('Surrogate-Control', 'no-store');
  response.status(200).send(randomCountry)
}

