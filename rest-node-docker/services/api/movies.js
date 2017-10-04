//  movies.js
//
//  Defines the movies api. Add to a server by calling:
//  require('./movies')
'use strict';

//  Adds the API to the app with the given options.
module.exports = (app, options) => {

  app.get('/movies', (req, res, next) => {
    options.repository.getMovies().then((movies) => {
      res.status(200).send(movies.map((movie) => { return {
          title: movie.title,
          imdb_rating: movie.imdb_rating
        };
      }));
    })
    .catch(next);
  });

  app.get('/movie/:title', (req, res, next) => {

    //  Get the title.
    var title = req.params.title;
    console.log(title);
    if (!title) {
      throw new Error("When searching for a movie, the title must be specified.");
    }

    //  Get the movie from the repo.
    options.repository.getMovieByTitle(title).then((movies) => {

      if(!movies) {
        res.status(404).send('Movie not found.');
      } else {
        res.status(200).send(movies.map((movie) => { return {
            title: movie.title,
            release_year: movie.release_year,
            imdb_rating: movie.imdb_rating,
            summary: movie.summary
          };
        }));
      }
    })
    .catch(next);
  });
};
