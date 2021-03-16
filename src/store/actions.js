export const ActionType = {
  CHANGE_FILTER: `movies/changeFilter`,
  RESET_FILTER: `movies/resetFilter`,
  LOAD_MOVIES: `movies/loadMovies`,
  LOAD_PROMO_MOVIE: `movies/loadPromoMovie`,
  LOAD_CURRENT_MOVIE: `movies/loadCurrentMovie`,
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

export const loadPromoMovie = (movie) => ({
  type: ActionType.LOAD_PROMO_MOVIE,
  payload: movie
});

export const loadCurrentMovie = (movie) => ({
  type: ActionType.LOAD_CURRENT_MOVIE,
  payload: movie
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
