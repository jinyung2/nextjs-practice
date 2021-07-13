const fs = require('fs');
const path = require('path')
const fetch = require('node-fetch');

/**
 * This script brings in data from countries rest API and caches it for use with static generation.
 * @returns returns stringified JSON data from restcountries API
 */
const getCountries = async () => {
  const data = await fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;region;population");
  const countries = await data.json();
  return JSON.stringify(countries);
}

let fileContent = '';
getCountries().then(res => {
  fileContent = `export const countries = ${res}`;
}).then(() => {
  try {
    fs.readdirSync('cache');
  } catch {
    fs.mkdirSync('cache');
  }
}).then(() => {
  fs.writeFile('cache/countries.js', fileContent, (err) => {
    if (err) return err;
    console.log('Countries Data has been cached.');
  })
})

// https://medium.com/@matswainson/building-a-search-component-for-your-next-js-markdown-blog-9e75e0e7d210