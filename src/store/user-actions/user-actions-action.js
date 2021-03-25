import {createAction} from "@reduxjs/toolkit";

export const ActionUserActType = {
  LOAD_FAVORITE_MOVIES: `userAction/loadFavoriteMovies`,
  ADD_FAVORITE_MOVIE: `userAction/addFavoriteMovie`,
  ADD_COMMENT: `userAction/addComment`
};

export const loadFavoriteMovies = createAction(ActionUserActType.LOAD_FAVORITE_MOVIES, (movies) => {
  return {
    payload: movies
  };
});

export const addFavoriteMovie = createAction(ActionUserActType.ADD_FAVORITE_MOVIE, (movie) => {
  return {
    payload: movie
  };
});

export const addComment = createAction(ActionUserActType.ADD_COMMENT, (comment) => {
  return {
    payload: comment
  };
});
