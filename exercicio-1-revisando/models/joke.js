const axios = require('axios');
const URL = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

const getJoke = async () => (await axios(URL)).data.joke;

const getRandomJoke = async () => (await axios.get('https://api.chucknorris.io/jokes/random')).data.value;

const getJokeByCategory = async (category) => (
  await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)).data.value;

module.exports = { getJoke, getRandomJoke, getJokeByCategory };