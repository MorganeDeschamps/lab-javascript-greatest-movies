// Iteration 1: All directors? - Get the array of all directors.


const movies = require("./data");
const { sort } = require("./data");

function getAllDirectors(moviesArray) {
  let allDirectorsArray = moviesArray.map( function (directorname) {
    return directorname.director;
  })
  return allDirectorsArray;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  let filteredMovies = moviesArray.filter((byDirector) => {
    return byDirector.director === "Steven Spielberg";
  }).filter((byGenre) => {
    return byGenre.genre.includes("Drama");
  })
  return filteredMovies.length;
};



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
  let filteredArray = moviesArray.filter((movie) => {return typeof movie.score === "number";});

  let averageScore = filteredArray.reduce(function (accumulator, element) 
  {return accumulator += element.score;}, 0);

  let total = (averageScore / moviesArray.length);
  total = total.toFixed(2);

  return Number(total);
  };
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    let filteredMoviesArray = moviesArray.filter((byGenre) => {
      return byGenre.genre.includes("Drama");
    });
    if (filteredMoviesArray.length === 0){return 0} else {
    let averageScore = filteredMoviesArray.reduce(function (accumulator, element) 
    {return (accumulator = accumulator + element.score);}, 0);
    
    let total = (averageScore / filteredMoviesArray.length);
    total = total.toFixed(2);

    return (Number(total));
    }
  };
}

/* better approach (correction): 


function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    let filteredMoviesArray = moviesArray.filter((byGenre) => {
      return byGenre.genre.includes("Drama");
    });
    if (filteredMoviesArray.length === 0){return 0} else {
    let averageScore = filteredMoviesArray.reduce(function (accumulator, element) 
    {return (accumulator = accumulator + element.score);}, 0);
    
    let total = (averageScore / filteredMoviesArray.length);
    total = total.toFixed(2);

    return (Number(total));
    }
  };
}*/


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let newArray = movies.sort((a, b) => (a.year > b.year) ? 1 : 
  (a.year === b.year) ? ((a.title > b.title) ? 1 : -1)
   : -1 ).map(function (el) {return el;})
  return newArray;
 }



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  let newArray = moviesArray.map(function (el) {return el.title;});
  newArray.sort();
  if (newArray.length > 20) 
  {newArray.splice(20, (newArray.length - 1))};
  return newArray;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// in movieObject it looks like : duration: '2h 33min',
// 2h 33min for ex should return 153 (as a number)

/* Leaving this beautiful monster here to remember it forever.

function turnHoursToMinutes(moviesArray) {
  for(movie of moviesArray){

    movie.duration = movie.duration.split("")
    .filter(number => number === "1" || number === "2" || number === "3" || number === "4" || number === "5" || number === "6" || number === "7" || number === "8" || number === "9" || number === "0")
    .map(Number);

    if (movie.duration.length === 3){
      time = ((movie.duration[0] * 60 ) + (movie.duration[1] * 10) + (movie.duration[2]));
      movie.duration = time}

    else if (movie.duration.length === 2){
      time = ((movie.duration[0] * 60 ) + (movie.duration[1]));
      movie.duration = time}

    else if (movie.duration.length === 1) {
      time = (movie.duration[0] * 60);
      movie.duration = time}

    else {console.log("n/a");}
  }
  let newArray = moviesArray.map(function (el) {return el;});
  return newArray;
}
*/

function turnHoursToMinutes(moviesArray) {
  let newArray = Array.from(moviesArray)
    for(movie of newArray){
      movie.duration = movie.duration.split(" ")
      let hours = parseInt(movie.duration[0]);
      let minutes = parseInt(movie.duration[1]);

      movie.duration = hours * 60 + minutes;
    }
  return newArray;
}




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
