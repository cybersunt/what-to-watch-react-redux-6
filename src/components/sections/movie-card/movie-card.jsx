import React from 'react';
import PropTypes from 'prop-types';
import MovieCardFull from "./movie-card-full/movie-card-full";
import MovieCardShort from "./movie-card-short/movie-card-short";
import MovieCardReview from "./movie-card-review/movie-card-review";
import movieCardPropTypes from "./move-card.prop";
import {connect} from "react-redux";

const getMovieCard = (type, currentMovie) => {
  switch (type) {
    case `full`:
      return <MovieCardFull {...currentMovie}/>;
    case `short`:
      return <MovieCardShort {...currentMovie}/>;
    case `review`:
      return <MovieCardReview {...currentMovie}/>;
    default:
      return <MovieCardShort {...currentMovie}/>;
  }
};

const MovieCard = ({type, promoMovie}) => getMovieCard(type, promoMovie);

MovieCard.propTypes = {...movieCardPropTypes, type: PropTypes.string};

const mapStateToProps = (state) => ({
  promoMovie: state.promoMovie
});

export {MovieCard};
export default connect(mapStateToProps)(MovieCard);
