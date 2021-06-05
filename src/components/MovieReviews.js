// Code MovieReviews Here
import React from 'react'


const MovieReviews = (props)  => 
   <div className="review-list">
        { props.reviews.map( movie => { 
            return <div className="review" key={movie.display_title}>
                    <a href={movie.link.url}>{movie.headline}</a>
                     <p>By: {movie.byline}</p>
                   </div> }  )        
        } 


  </div>    


MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews

