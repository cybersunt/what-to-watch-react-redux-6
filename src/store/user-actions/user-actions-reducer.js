import {createReducer} from "@reduxjs/toolkit";
import {addComment, loadFavoriteMovies, resetFavoriteMovies} from "./user-actions-action";

const initialState = {
  isReviewUploaded: false,
  isMyDataLoaded: false,
  favoriteMovies: []
};

export const userActions = createReducer(initialState, (builder) => {
  builder.addCase(loadFavoriteMovies, (state, action) => {
    state.favoriteMovies = action.payload;
    state.isMyDataLoaded = true;
  });
  builder.addCase(resetFavoriteMovies, (state)=> {
    state.favoriteMovies = [];
    state.isMyDataLoaded = false;
  });
  builder.addCase(addComment, (state, action) => {
    state.reviews = action.payload;
    state.isReviewUploaded = true;
  });
});
