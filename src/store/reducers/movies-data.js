import {ActionDataType} from "../actions/movies-data";

const initialState = {
  isDataLoaded: false,
  movies: [],
};

export const moviesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionDataType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isDataLoaded: true
      };
  }

  return state;
};
