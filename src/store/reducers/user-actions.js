import {ActionType} from "./actions";

const initialState = {
  isReviewUploaded: false,
  isMyDataLoaded: false,
  favoriteMovies: [],
};

export const userActions = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload,
        isMyDataLoaded: true
      };
    case ActionType.ADD_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovies: action.payload
      };
    case ActionType.ADD_COMMENT:
      return {
        ...state,
        reviews: action.payload,
        isReviewUploaded: true,
      };
  }

  return state;
};
