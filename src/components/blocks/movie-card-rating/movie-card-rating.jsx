import React from "react";
import PropTypes from "prop-types";
import {getMovieRatingText, getStringRatingMovie} from "../../../utils/utils";

const MovieCardRating = ({rating, scoresCount}) => {

  return (
    <div className="movie-rating">
      <div className="movie-rating__score">{getStringRatingMovie(rating)}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getMovieRatingText(rating)}</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>
  );
};

MovieCardRating.propTypes = {
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
};

export default MovieCardRating;
