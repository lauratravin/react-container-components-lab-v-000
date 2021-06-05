import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {


    state = {
        searchTerm: '',
        reviews: []
    }   


    handleInputSearch = e => {
        this.setState(
          //  {[e.target.name]: e.target.value}
          {searchTerm: e.target.value}
        )
    }
    //the submit do the fetch
    handleSubmit = (e) => {
        e.preventDefault()
   
        fetch(URL+`&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(movies => {
            this.setState( {reviews: movies.results, searchTerm: ''})
        })



    }


    render(){
        return(
            <div>
                    <form onSubmit={this.handleSubmit}>  
                        <label>Search Movie Reviews</label>
                        <input
                        type="text"
                        name="searchTerm"
                        value={this.state.searchTerm}
                        onChange={this.handleInputSearch}
                        />
                        <button type="submit">Search</button>
                    </form>
                    <div>
                     <MovieReviews reviews={this.state.reviews} />
                    </div>
             </div>
             
              
        )
    }

}

export default SearchableMovieReviewsContainer;