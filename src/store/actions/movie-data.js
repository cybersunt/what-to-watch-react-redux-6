export const ActionMovieType = {
  LOAD_CURRENT_MOVIE: `movie/loadCurrentMovie`,
  LOAD_PROMO_MOVIE: `movie/loadPromoMovie`,
  LOAD_COMMENTS: `movie/loadComments`,
};

export const loadPromoMovie = (movie) => ({
  type: ActionMovieType.LOAD_PROMO_MOVIE,
  payload: movie
});

export const loadCurrentMovie = (movie) => ({
  type: ActionMovieType.LOAD_CURRENT_MOVIE,
  payload: movie
});

export const loadComments = (reviews) => ({
  type: ActionMovieType.LOAD_COMMENTS,
  payload: reviews
});
