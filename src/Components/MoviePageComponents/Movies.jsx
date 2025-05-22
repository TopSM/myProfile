import React from 'react'

function Movies(props) {
  return (
    <table>
      <thead>
          <tr >
            <th>Movie Title |</th>
            <th>My Rate |</th>
            <th>My Review |</th>
            <th>Votes |</th>                
          </tr>
      </thead>
      <tbody>
        {props.movieList.map(ml => (        
          <tr
            className="title-fitting"
            key={ml.id}
          >
                <div>
                  <img
                    src={ml.moviePic}
                  />
                  <td>{ml.movieTitle} </td>
                </div>
                <td>{ml.myRating}</td>
                <td>{ml.myReview}</td>
                <td>{ml.votes}</td>
          </tr>
        ))} 
      </tbody>
    </table>
  )
}

export default Movies