import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { API } from "../api-service";
import { useCookies } from "react-cookie";

function MovieList(props) {
  const [token] = useCookies(["mr-token"]);
  const movieClicked = (movie) => (event) => {
    props.movieClicked(movie);
  };
  const editClicked = (movie) => (event) => {
    props.editClicked(movie);
  };
  const removeClicked = (movie) => (event) => {
    API.deleteMovie(movie.id, token["mr-token"])
      .then((resp) => props.deleteMovie(resp))
      .catch((error) => console.log(error))
      .then(window.location.reload());
    event.preventDefault();
  };

  return (
    <div>
      {props.movies &&
        props.movies.map((movie) => {
          return (
            <div key={movie.id} className="movie-item">
              <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
              <FontAwesomeIcon icon={faEdit} onClick={editClicked(movie)} />
              <FontAwesomeIcon icon={faTrash} onClick={removeClicked(movie)} />
            </div>
          );
        })}
    </div>
  );
}

export default MovieList;
