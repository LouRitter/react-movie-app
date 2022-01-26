import React, { Component } from "react";

import UserService from "../services/user.service";
import MovieService from "../services/movie.service";
import SearchPage from "./movies/searchpage.component";
export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
        content: "",
        movies: [],
    };
  }

  componentDidMount() {
    // UserService.getUserBoard().then(
    //   response => {
    //     this.setState({
    //       content: response.data.message
    //     });
    //   },
    //   error => {
    //     this.setState({
    //       content:
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString()
    //     });
    //   }
    // );
    UserService.getLovedMovies().then(
      response => {
        this.setState({
          movies: response.data
        });
      },
      error => {
        this.setState({
          movies:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );

  }

  render() {

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          {this.state.movies.map((data, index) => {
            return <h3>{ data.title }</h3>
          })
          }
               

        </header>
      </div>
    );
  }
}