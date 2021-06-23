const fetch = require('node-fetch');

const URL = 'https://rickandmortyapi.com/api/character/1';

export const promise = new Promise((resolve, reject) => {
  fetch(URL)
    .then((res) => {
      const response = res.json();
      resolve(response);
    })
    .catch((err) => {
      reject(err);
    });
});
