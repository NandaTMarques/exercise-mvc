const jokeModel = require('../models/joke');

const listJokes = async (req, res) => {
  const joke = await jokeModel.getJoke();
  return res.render('jokeViews', { joke });
}

module.exports = { listJokes };