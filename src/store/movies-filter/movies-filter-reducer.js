import {MOVIES_COUNT_PER_STEP} from "../constants/common";
import {changeGenre, resetFilter, showMoreMovies} from "./movies-filter-action";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  currentFilterGenre: `All genres`,
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
    state.currentFilterGenre = `All genres`;
    state.renderedMoviesCount = MOVIES_COUNT_PER_STEP;
  });
});
