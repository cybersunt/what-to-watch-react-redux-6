import React from "react";
import MovieCardRating from "../../movie-card-rating/movie-card-rating";
import {getStringFromArray} from "../../../../utils/utils";
import movieCardTabPropTypes from "../move-card-tab.prop";

const MovieCardTabOverview = ({rating, scoresCount, description, director, starring}) => {
  return (
    <>
      <MovieCardRating rating={rating} scoresCount={scoresCount}/>
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {getStringFromArray(starring, `,`)}</strong></p>
      </div>
    </>
  );
};

MovieCardTabOverview.propTypes = {...movieCardTabPropTypes};

export default MovieCardTabOverview;
