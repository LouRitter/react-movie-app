import React from 'react';
import Movie from './movie.component';
const MovieList = ({movieList=[]}) => {
  return (
    <div className="row">

    { movieList.map((data,index) => {
        if (data.media_type === "movie") {
          return (
              <Movie movie={data} key={index}></Movie>
    	   )	
    	 }
    	 return null
    }) }
    </div>
  );
}

export default MovieList