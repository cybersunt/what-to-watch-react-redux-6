import React from 'react';
import PropTypes from 'prop-types';
import MovieCardFull from "./movie-card-full/movie-card-full";
import MovieCardShort from "./movie-card-short/movie-card-short";
import MovieCardReview from "./movie-card-review/movie-card-review";
import movieCardPropTypes from "./move-card.prop";
import {MovieCardTypes} from "../../../constants/constants";

const getMovieCard = (type, currentMovie) => {
  switch (type) {
    case MovieCardTypes.FULL:
      return <MovieCardFull {...currentMovie}/>;
    case MovieCardTypes.SHORT:
      return <MovieCardShort {...currentMovie}/>;
    case MovieCardTypes.REVIEW:
      return <MovieCardReview {...currentMovie}/>;
    default:
      return <MovieCardShort {...currentMovie}/>;
  }
};

const MovieCard = ({type, currentMovie}) => getMovieCard(type, currentMovie);

MovieCard.propTypes = {...movieCardPropTypes, type: PropTypes.string};

export default MovieCard;
