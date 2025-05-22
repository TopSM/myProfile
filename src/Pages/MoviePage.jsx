import React from 'react'
import Movies from '../Components/MoviePageComponents/Movies'

const movieList =[
  {
    movieTitle:"title1",
    myRating:"9/10",
    moviePic:"",
    myReview:"the movie was good",
    votes:"0",
    id:"",
  },
]
function MoviePage() {
  return (
    <Movies movieList={movieList}/>
  )
}

export default MoviePage