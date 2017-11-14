var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mongodb:27017/reach-engine";

class Repository {
  constructor() {
  }

  getMovies() {
    return new Promise((resolve, reject) => {

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("Movies").find({}).toArray(function(err, results) {
          if (err) throw err;
          resolve((results || []).map((movie) => {
            return {
              title: movie.title,
              release_year: movie.year,
              imdb_rating: movie.imdb_rating
            };
          }));
          db.close();
        });

      });
    });

  }

  getMovieByTitle(title) {
    return new Promise((resolve, reject) => {

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var query = { title: title };
        db.collection("Movies").find(query).toArray(function(err, results) {
          if (err) throw err;
          resolve((results || []).map((movie) => {
            return {
              title: movie.title,
              release_year: movie.year,
              imdb_rating: movie.imdb_rating,
              summary: movie.summary
            };
          }));
          db.close();
        });

      });
    });

  }

  disconnect() {

  }
}
//  One exported function, returns a connected repo.
module.exports.connect = () => {
  return new Promise((resolve, reject) => {

    resolve(new Repository());
  });
};
