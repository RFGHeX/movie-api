const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getPartialMatch, noInput, addNewMovie } = require('./controllers/movies')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:input', getPartialMatch)

app.post('/', bodyParser.json(), addNewMovie)

app.all('*', noInput)

app.listen(6969, () => {
  console.log('Searching for heracy on 6969....') // eslint-disable-line no-console
})
