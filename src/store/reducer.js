import {AuthorizationStatus} from "../constants/auth";
import {MOVIES_COUNT_PER_STEP} from "../constants/common";
import {loadComments, loadCurrentMovie, loadPromoMovie} from "./movie-data/movie-data-action";
import {loadMovies} from "./movies-data/movies-data-action";
import {changeGenre, resetFilter, showMoreMovies} from "./movies-filter/movies-filter-action";
import {addComment, addFavoriteMovie, loadFavoriteMovies} from "./user-actions/user-actions-action";
import {loadAuthInfo, logOut, requireAuthorization} from "./user-data/user-data-action";
import {createReducer} from "@reduxjs/toolkit";
import {catchError} from "./error/error-action";

const initialState = {
  isDataLoaded: false,
  isUserDataReceived: false,
  isCurrentMovieLoaded: false,
  isReviewsLoaded: false,
  isReviewUploaded: false,
  isMyDataLoaded: false,
  isCatchError: false,
  authorizationStatus: AuthorizationStatus.AUTH,
  authInfo: {},
  movies: [],
  favoriteMovies: [],
  promoMovie: {},
  currentMovie: {},
  currentFilterGenre: `All genres`,
  reviews: [],
  renderedMoviesCount: MOVIES_COUNT_PER_STEP
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(catchError, (state) => {
    state.isCatchError = true;
  });
  builder.addCase(loadPromoMovie, (state, action) => {
    state.promoMovie = action.payload;
  });
  builder.addCase(loadCurrentMovie, (state, action) => {
    state.currentMovie = action.payload;
    state.isCurrentMovieLoaded = true;
  });
  builder.addCase(loadComments, (state, action) => {
    state.reviews = action.payload;
    state.isReviewsLoaded = true;
  });
  builder.addCase(loadMovies, (state, action) => {
    state.movies = action.payload;
    state.isDataLoaded = true;
  });
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
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(loadAuthInfo, (state, action) => {
    state.authInfo = action.payload;
    state.isUserDataReceived = true;
  });
});
