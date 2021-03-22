export const ActionUserActType = {
  LOAD_FAVORITE_MOVIES: `userAction/loadFavoriteMovies`,
  ADD_FAVORITE_MOVIE: `userAction/addFavoriteMovie`,
  ADD_COMMENT: `userAction/addComment`
};

export const loadFavoriteMovies = (movies) => ({
  type: ActionUserActType.LOAD_FAVORITE_MOVIES,
  payload: movies
});

export const addFavoriteMovie = (movie) => ({
  type: ActionUserActType.ADD_FAVORITE_MOVIE,
  payload: movie
});

export const addComment = (comment) => ({
  type: ActionUserActType.ADD_COMMENT,
  payload: comment
});
