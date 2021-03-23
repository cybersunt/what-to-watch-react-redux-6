import {createReducer} from "@reduxjs/toolkit";
import {addComment, addFavoriteMovie, loadFavoriteMovies} from "../actions/user-actions-action";

const initialState = {
  isReviewUploaded: false,
  isMyDataLoaded: false,
  favoriteMovies: [],
};

export const userActions = createReducer(initialState, (builder) => {
  builder.addCase(loadFavoriteMovies, (state, action) => {
    state.favoriteMovies = action.payload;
    state.isMyDataLoaded = true;
  });
  builder.addCase(addFavoriteMovie, (state, action) => {
    state.favoriteMovies = action.payload;
  });
  builder.addCase(addComment, (state, action) => {
    state.reviews = action.payload;
    state.isReviewUploaded = true;
  });
});
