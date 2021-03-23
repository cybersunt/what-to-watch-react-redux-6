import {loadMovies} from "../actions/movies-data-action";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  isDataLoaded: false,
  movies: [],
};

export const moviesData = createReducer(initialState, (builder) => {
  builder.addCase(loadMovies, (state, action) => {
    state.movies = action.payload;
    state.isDataLoaded = true;
  });
});
