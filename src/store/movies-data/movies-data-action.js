import {createAction} from "@reduxjs/toolkit";

export const ActionDataType = {
  LOAD_MOVIES: `movies/loadMovies`
};

export const loadMovies = createAction(ActionDataType.LOAD_MOVIES, (movies) => {
  return {
    payload: movies
  };
});
