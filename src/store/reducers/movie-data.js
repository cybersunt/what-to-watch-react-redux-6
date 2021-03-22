import {ActionType} from "./actions";

const initialState = {
  isCurrentMovieLoaded: false,
  isReviewsLoaded: false,
  promoMovie: {},
  currentMovie: {},
  reviews: [],
};

export const movieData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        promoMovie: action.payload
      };
    case ActionType.LOAD_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
        isCurrentMovieLoaded: true
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        reviews: action.payload,
        isReviewsLoaded: true
      };
  }

  return state;
};
