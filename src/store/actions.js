export const ActionType = {
  CHANGE_FILTER: `movies/changeFilter`,
  RESET_FILTER: `movies/resetFilter`,
  LOAD_FAVORITE_MOVIES: `favorite/loadMovies`,
  ADD_FAVORITE_MOVIE: `favorite/addMovie`,
  LOAD_MOVIES: `movies/loadMovies`,
  LOAD_CURRENT_MOVIE: `movies/loadCurrentMovie`,
  LOAD_PROMO_MOVIE: `movies/loadPromoMovie`,
  LOAD_REVIEWS: `reviews/loadReviews`,
  SHOW_MORE: `movies/showMoreMovies`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_AUTH_INFO: `user/loadAuthInfo`,
  LOG_OUT: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `movies/redirectToRoute`,
};

export const changeGenre = (evt) => ({
  type: ActionType.CHANGE_FILTER,
  payload: evt.target.id,
});

export const resetFilter = () => ({
  type: ActionType.RESET_FILTER
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies
});

export const loadFavoriteMovies = (movies) => ({
  type: ActionType.LOAD_FAVORITE_MOVIES,
  payload: movies
});

export const addFavoriteMovie = (movie) => ({
  type: ActionType.ADD_FAVORITE_MOVIE,
  payload: movie
});

export const loadPromoMovie = (movie) => ({
  type: ActionType.LOAD_PROMO_MOVIE,
  payload: movie
});

export const loadCurrentMovie = (movie) => ({
  type: ActionType.LOAD_CURRENT_MOVIE,
  payload: movie
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews
});

export const showMoreMovies = () => ({
  type: ActionType.SHOW_MORE,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadAuthInfo = (data) => ({
  type: ActionType.LOAD_AUTH_INFO,
  payload: data,
});


export const logOut = (status) => ({
  type: ActionType.LOG_OUT,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
