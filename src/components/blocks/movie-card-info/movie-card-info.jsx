import React from "react";
import PropTypes from "prop-types";
import MovieCardButtons from "./movie-card-buttons/movie-card-buttons";

const MovieCardInfo = ({fullVersion, name, genre, released}) => {
  return (
    <div className="movie-card__desc">

      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>
      <MovieCardButtons fullVersion={fullVersion}/>

    </div>
  );
};

MovieCardInfo.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  fullVersion: PropTypes.bool
};

export default MovieCardInfo;

