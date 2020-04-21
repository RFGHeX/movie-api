const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getPartialMatch = (request, response) => {
  const { input } = request.params

  const matchingMovies = movies.filter(movie => {
    const stringToPartialMatchTo = (movie.title + ' ' + movie.directors.join(' ')).toLowerCase()

    return stringToPartialMatchTo.includes(input.toLowerCase())
  })

  return matchingMovies.lenght
    ? response.send(matchingMovies)
    : response.status(404).send(`No results matching '${input}' have been found.`)
}

const addNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres,
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('Please make sure all fields are filled')
  }

  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres,
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

const noInput = (request, response) => {
  return response.sendStatus(404)
}

module.exports = { getAllMovies, getPartialMatch, noInput, addNewMovie }
