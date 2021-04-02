import {createReducer} from "@reduxjs/toolkit";
import {addComment, loadFavoriteMovies} from "./user-actions-action";

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
  builder.addCase(addComment, (state, action) => {
    state.reviews = action.payload;
    state.isReviewUploaded = true;
  });
});
