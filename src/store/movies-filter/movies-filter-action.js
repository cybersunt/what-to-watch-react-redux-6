import {createAction} from "@reduxjs/toolkit";

export const ActionFilterType = {
  CHANGE_FILTER: `moviesActions/changeFilter`,
  RESET_FILTER: `moviesActions/resetFilter`,
  SHOW_MORE: `moviesActions/showMoreMovies`
};

export const changeGenre = createAction(ActionFilterType.CHANGE_FILTER, (filterName) => {
  return {
    payload: filterName
  };
});

export const resetFilter = createAction(ActionFilterType.RESET_FILTER);

export const showMoreMovies = createAction(ActionFilterType.SHOW_MORE);
