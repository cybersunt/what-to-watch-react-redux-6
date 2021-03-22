export const ActionFilterType = {
  CHANGE_FILTER: `moviesActions/changeFilter`,
  RESET_FILTER: `moviesActions/resetFilter`,
  SHOW_MORE: `moviesActions/showMoreMovies`
};

export const changeGenre = (evt) => ({
  type: ActionFilterType.CHANGE_FILTER,
  payload: evt.target.id,
});

export const resetFilter = () => ({
  type: ActionFilterType.RESET_FILTER
});

export const showMoreMovies = () => ({
  type: ActionFilterType.SHOW_MORE,
});
