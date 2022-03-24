import axios from 'axios';

const MOVIE_URL = "http://localhost:3000/";

class MovieService {

  getMovieContent(input) {
    return axios.get(MOVIE_URL+"movies/search?query="+ input);    
  }
  saveMovie(input) {
    return axios.post(MOVIE_URL + "movies", {
      movie: input,
      user: JSON.parse(localStorage.getItem("user"))
    })    
  } 

}

export default new MovieService();