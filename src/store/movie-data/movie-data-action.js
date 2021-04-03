import {createAction} from "@reduxjs/toolkit";

export const ActionMovieType = {
  LOAD_CURRENT_MOVIE: `movie/loadCurrentMovie`,
  RESET_CURRENT_MOVIE: `movie/resetCurrentMovie`,
  LOAD_PROMO_MOVIE: `movie/loadPromoMovie`,
  LOAD_COMMENTS: `movie/loadComments`,
};

export const loadPromoMovie = createAction(ActionMovieType.LOAD_PROMO_MOVIE, (movie) => {
  return {
    payload: movie
  };
});

export const loadCurrentMovie = createAction(ActionMovieType.LOAD_CURRENT_MOVIE, (movie) => {
  return {
    payload: movie
  };
});

export const resetCurrentMovie = createAction(ActionMovieType.RESET_CURRENT_MOVIE);

export const loadComments = createAction(ActionMovieType.LOAD_COMMENTS, (reviews) => {
  return {
    payload: reviews
  };
});
