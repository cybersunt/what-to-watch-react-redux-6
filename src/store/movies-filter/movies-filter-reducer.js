import {changeGenre, resetFilter, showMoreMovies} from "./movies-filter-action";
import {createReducer} from "@reduxjs/toolkit";
import {DEFAULT_MOVIE_GENRE, MOVIES_COUNT_PER_STEP} from "../../constants/constants";

const initialState = {
  currentFilterGenre: DEFAULT_MOVIE_GENRE,
  renderedMoviesCount: MOVIES_COUNT_PER_STEP
};

export const moviesFilter = createReducer(initialState, (builder) => {
  builder.addCase(showMoreMovies, (state) => {
    state.renderedMoviesCount = state.renderedMoviesCount + MOVIES_COUNT_PER_STEP;
  });
  builder.addCase(changeGenre, (state, action) => {
    state.currentFilterGenre = action.payload;
  });
  builder.addCase(resetFilter, (state) => {
    state.currentFilterGenre = DEFAULT_MOVIE_GENRE;
    state.renderedMoviesCount = MOVIES_COUNT_PER_STEP;
  });
});
