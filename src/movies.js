// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map((eachElement, index) => {
        return eachElement.director
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0
    let stevenFilms = moviesArray.filter((eachMovie) => {
        if (eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama") === true) {
            count++
            return true
        }
    })
    return count
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    let puntuation = moviesArray.reduce((acc, eachElement) => {
        if (eachElement.score === undefined) {
            return acc
        } else {
            return acc + eachElement.score / moviesArray.length
        }
        
    }, 0)

   // return puntuation.toFixed(2) ¿Porque no funciona?
   return Number(puntuation.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((movies) => {
        if(movies.genre.includes("Drama") === true) {
            return true
        }
    })
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesClon = structuredClone(moviesArray)
    moviesClon = moviesClon.sort((movie2, movie1) => {
        if (movie2.year > movie1.year) {
            return 1
        } else if (movie2.year < movie1.year) {
            return -1
        } else {
            if (movie2.title > movie1.title) {
                return 1
            } else if (movie2.title < movie1.title) {
                return -1
            } 
            
        }
        
    })
    
    return moviesClon
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
 function orderAlphabetically(moviesArray) {
     let onlyTitles = moviesArray.map((movie) => {
        return movie.title
     })
     return onlyTitles.sort().slice(0, 20)
 }

 orderAlphabetically(movies)
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

let moviesClone = structuredClone(moviesArray)
    let durationNumber = movies.map((movies) => {
        movies.duration = movies.duration.replace("h", "") + movies.duration.replace("min", "")
        return movies.duration
    })

    console.log(durationNumber)
    return durationNumber
}

turnHoursToMinutes(movies)
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
     if (moviesArray.length === 0) {
        return null
     }
     
   
}
bestYearAvg(movies)