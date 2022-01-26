import React, { useState, useEffect } from 'react';
import MovieService from "../../services/movie.service";
import MovieList from './movielist.component';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [movieList, setMovieList] = useState();
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};


    const handleSubmit = (e) => {
        e.preventDefault();
     MovieService.getMovieContent( input )
         .then(response =>
        setMovieList(response.data.results) )



  }
	
  return (
    <>
          <h1>Movie List</h1>
          <form onSubmit={(e) => {handleSubmit(e)}}>
            <input 
            style={BarStyling}
            key="random1"
            value={input}
            placeholder={"search movies"}
            onChange={(e) => setInput(e.target.value)}
              />
            <button className="btn btn-primary" type = 'submit'>search</button>

          </form>
      <MovieList movieList={movieList}/>
    </>
   );
}

export default SearchPage