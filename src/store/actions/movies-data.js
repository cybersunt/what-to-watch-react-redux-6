export const ActionDataType = {
  LOAD_MOVIES: `movies/loadMovies`
};

export const loadMovies = (movies) => ({
  type: ActionDataType.LOAD_MOVIES,
  payload: movies
});
