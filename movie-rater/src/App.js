import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/movie-list";
import MovieDetails from "./components/movie-details";
import MovieForm from "./components/movie-form";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [editMovie, setEditMovie] = useState("");
  const [removeMovie, setRemoveMovie] = useState("");
  const [token, setToken, deleteToken] = useCookies(["mr-token"]);
  const [data, loading, error] = useFetch();

  useEffect(() => {
    setMovies(data);
  }, [data]);

  useEffect(() => {
    console.log(token);
    if (!token["mr-token"]) {
      window.location.href = "/";
    }
  }, [token]);

  console.log(movies);

  const loadMovie = (movie) => {
    setSelectedMovie(movie);
    setEditMovie(null);
  };
  const editClicked = (movie) => {
    setEditMovie(movie);
    setSelectedMovie(null);
  };
  const updatedMovie = (movie) => {
    const newMovie = movie.map((mov) => {
      if (mov.id === movie.id) {
        return movie;
      }
      return mov;
    });
    setMovies(newMovie);
  };
  const newMovie = () => {
    setEditMovie({ title: "", description: "" });
    setSelectedMovie(null);
  };
  const movieCreated = (movie) => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
  };
  const remove = (movie) => {
    setRemoveMovie(movie);
  };
  const logoutUser = () => {
    deleteToken(["mr-token"]);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error loading movies</h1>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FontAwesomeIcon icon={faFilm} />
          <span>Movie Rater</span>
        </h1>
        <FontAwesomeIcon
          className="signouticon"
          icon={faSignOutAlt}
          onClick={logoutUser}
        />
      </header>
      <div className="layout">
        <div>
          <MovieList
            movies={movies}
            movieClicked={loadMovie}
            editClicked={editClicked}
            removeClicked={remove}
          />
          <button onClick={newMovie}>New Movie</button>
        </div>
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie} />
        {editMovie ? (
          <MovieForm
            movie={editMovie}
            editClicked={editClicked}
            updateClicked={updatedMovie}
            movieCreated={newMovie}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
