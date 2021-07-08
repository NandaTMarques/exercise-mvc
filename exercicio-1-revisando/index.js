const express = require('express');
const jokesController = require('./controllers/jokesController');
const joke = require('./controllers/joke');
const categoriesController = require('./controllers/categoriesController');

const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/jokes', joke.listJokes);

app.get('/joke', jokesController.randomJoke);

app.get('/jokes/:category', jokesController.jokeByCategory);

app.get('/categories', categoriesController.getCategories);

app.get('/', categoriesController.redirectToCategories); //redireciona

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listen to port ${PORT}`));