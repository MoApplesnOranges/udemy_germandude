import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/movie-list";
import MovieDetails from "./components/movie-details";
import MovieForm from "./components/movie-form";
function App() {
  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editMovie, setEditMovie] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 264b3755062a0f078bc9bc3937418fe8377e61f7",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setMovie(resp))
      .catch((error) => console.log(error));
  }, []);
  // const movieClicked = (movie) => {
  //   setSelectedMovie(movie);
  // };
  // useEffect(
  //   (movie) => {
  //     setEditMovie(movie);
  //   },
  //   [editMovie]
  // );
  const loadMovie = (movie) => {
    setSelectedMovie(movie);
    setEditMovie(null);
  };
  const editClicked = (movie) => {
    setEditMovie(movie);
    setSelectedMovie(null);
  };
  const updatedMovie = (movie) => {
    const newMovie = movies.map((mov) => {
      if (mov.id === movie.id) {
        return movie;
      }
      return mov;
    });
    setMovie(newMovie);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <MovieList
          movies={movies}
          movieClicked={loadMovie}
          editClicked={editClicked}
        />
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie} />
        {editMovie ? (
          <MovieForm movie={editMovie} updatedMovie={updatedMovie} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
