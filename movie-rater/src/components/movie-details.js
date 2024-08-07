import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function MovieDetails(props) {
  const [highlighted, setHighLighted] = useState(-1);
  const highLightRate = (high) => (event) => {
    setHighLighted(high);
  };
  const rateClicked = (rate) => (event) => {
    fetch(`http://127.0.0.1:8000/api/movies/${props.movie.id}/rate_movie/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 264b3755062a0f078bc9bc3937418fe8377e61f7",
      },
      body: JSON.stringify({ stars: rate + 1 }),
    })
      .then(() => getDetails())
      .catch((error) => console.log(error));
  };
  const getDetails = () => {
    fetch(`http://127.0.0.1:8000/api/movies/${props.movie.id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 264b3755062a0f078bc9bc3937418fe8377e61f7",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => props.updateMovie(resp))
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      {props.movie ? (
        <div>
          <h1>{props.movie.title}</h1>
          <p>{props.movie.description}</p>
          <FontAwesomeIcon
            icon={faStar}
            className={props.movie.avg_rating > 0 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={props.movie.avg_rating > 1 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={props.movie.avg_rating > 2 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={props.movie.avg_rating > 3 ? "orange" : ""}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={props.movie.avg_rating > 4 ? "orange" : ""}
          />
          ({props.movie.no_of_ratings})
          <div className="rate-container">
            <h2>Rate It!</h2>
            {[...Array(5)].map((e, i) => {
              return (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={highlighted > i - 1 ? "purple" : ""}
                  onMouseEnter={highLightRate(i)}
                  onMouseLeave={highLightRate(-1)}
                  onClick={rateClicked(i)}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default MovieDetails;
