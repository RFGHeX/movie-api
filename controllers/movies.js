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


const noInput = (request, response) => {
  return response.sendStatus(404)
}

module.exports = { getAllMovies, getPartialMatch, noInput }
