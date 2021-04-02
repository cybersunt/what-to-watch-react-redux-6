import {loadComments, loadCurrentMovie, loadPromoMovie} from "./movie-data-action";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  isCurrentMovieLoaded: false,
  isPromoMovieLoaded: false,
  isReviewsLoaded: false,
  promoMovie: {},
  currentMovie: {},
  currentUpdateMovie: {},
  reviews: [],
};

export const movieData = createReducer(initialState, (builder) => {
  builder.addCase(loadPromoMovie, (state, action) => {
    state.promoMovie = action.payload;
    state.isPromoMovieLoaded = true;
  });
  builder.addCase(loadCurrentMovie, (state, action) => {
    state.currentMovie = action.payload;
    state.isCurrentMovieLoaded = true;
  });
  builder.addCase(loadComments, (state, action) => {
    state.reviews = action.payload;
    state.isReviewsLoaded = true;
  });
});
