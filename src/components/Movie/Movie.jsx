import React from "react";
import { useHistory } from "react-router-dom";
import "./Movie.css";

const Movie = ({ id, poster, title, vote_average }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/movies/${id}`);
  };
  return (
    <li className="movie-card" onClick={handleClick}>
      <img
        className="poster"
        src={
          poster ? `https://image.tmdb.org/t/p/w500${poster}` : "unavailable"
        }
        alt={title}
      />
      <h1 className="title">{title}</h1>
      <h1 className="rating">Rating {Math.round(vote_average, 2)}</h1>
    </li>
  );
};

export default Movie;
