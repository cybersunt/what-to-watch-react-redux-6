import {MOVIES_COUNT_PER_STEP} from "../constants/common";
import {ActionFilterType} from "../actions/movies-filter";

const initialState = {
  currentFilterGenre: `All genres`,
  renderedMoviesCount: MOVIES_COUNT_PER_STEP
};

export const moviesFilter = (state = initialState, action) => {
  switch (action.type) {
    case ActionFilterType.SHOW_MORE:
      return {
        ...state,
        renderedMoviesCount: state.renderedMoviesCount + MOVIES_COUNT_PER_STEP
      };
    case ActionFilterType.CHANGE_FILTER:
      return {
        ...state,
        currentFilterGenre: action.payload
      };
    case ActionFilterType.RESET_FILTER:
      return {
        ...state,
        currentFilterGenre: `All genres`,
        renderedMoviesCount: MOVIES_COUNT_PER_STEP
      };
  }

  return state;
};
