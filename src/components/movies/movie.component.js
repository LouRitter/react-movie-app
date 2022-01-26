import { React, useState }from "react";
import MovieService from "../../services/movie.service";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://media.comicbook.com/files/img/default-movie.png";


const Movie = ({ movie }) => {

  console.log(movie)
  const poster =
    movie.poster_path === null ? DEFAULT_PLACEHOLDER_IMAGE : `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  
  const saveMovie = () => {
    console.log("HERRE")
    MovieService.saveMovie(movie)
  }

  return (
    

    <div className="card mb-3" style={{ width: "26vw" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
            className="card-img"
            width="20vw"
            alt={`The movie titled: ${movie.title}`}
            src={poster}
          />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
            <p className="card-text" style={{ fontSize: "0.75em" }}>{movie.overview}</p>
            <div className="row">
              <button className="btn btn-primary" onClick={() => saveMovie({ movie }) } style={{width: "40%", margin:"5px"}}>Love</button>
              <button className="btn btn-secondary" style={{width: "40%", margin:"5px"}}>Hate</button>
            </div>
            <p className="card-text"><small className="text-muted">{movie.release_date}</small></p>

            </div>
          </div>
        </div>
      </div>
    
  );
};


export default Movie;