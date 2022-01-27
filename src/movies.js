// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsArray = movies.map((eachMovie) => {
    return eachMovie.director;
  })
  return directorsArray

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const moviesBySpielberg = movies.filter((eachMovie) => {
    return (
      eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
    )
  })
  return moviesBySpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) { 
  if(!movies.length){
    return 0
  }
const moviesScores = movies
.filter((eachMovie) => {
  return eachMovie.score !== undefined
})
.reduce((accum, eachMovie) => {
  return accum += eachMovie.score;
}, 0);

let averageScore = moviesScores / movies.length;
return +averageScore.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

const dramaMovies = movies
.filter((eachMovie) => {
return eachMovie.genre.includes('Drama')
});

if (!dramaMovies.length) {
return 0;
}
const dramaScores = dramaMovies.reduce((accum, eachMovie) => {
return accum += eachMovie.score / dramaMovies.length
}, 0);

let averageDramaScore = dramaScores / dramaMovies.length;
return +averageDramaScore.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesOrdered = movies.slice();

  const moviesByYear = moviesOrdered.sort((el1, el2) => {
    if (el1.year > el2.year) return 1;
    if (el1.year < el2.year) return -1;
    if (el1.title < el2.title) return -1;
    if (el1.title > el2.title) return 1;
    return 0;
    }
  )
return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const movieTitles = movies.map((eachMovie) => {
    return eachMovie.title
  })
  .sort()
  .slice(0,20);
  return movieTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
