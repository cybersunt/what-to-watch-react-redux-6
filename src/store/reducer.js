import {ActionType} from "./actions";
import {AuthorizationStatus} from "../constants/auth";
import {MOVIES_COUNT_PER_STEP} from "../constants/common";

export const initialState = {
  isDataLoaded: false,
  isUserDataReceived: false,
  isCurrentMovieLoaded: false,
  isReviewsLoaded: false,
  isMyDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {},
  movies: [],
  favoriteMovies: [],
  promoMovie: {},
  currentMovie: {},
  currentFilterGenre: `All genres`,
  reviews: [],
  renderedMoviesCount: MOVIES_COUNT_PER_STEP
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isDataLoaded: true
      };
    case ActionType.LOAD_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload,
        isMyDataLoaded: true
      };
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
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isReviewsLoaded: true
      };
    case ActionType.SHOW_MORE:
      return {
        ...state,
        renderedMoviesCount: state.renderedMoviesCount + MOVIES_COUNT_PER_STEP
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOAD_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload,
        isUserDataReceived: true
      };
    case ActionType.LOG_OUT:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.CHANGE_FILTER:
      return {
        ...state,
        currentFilterGenre: action.payload
      };
    case ActionType.RESET_FILTER:
      return {
        ...state,
        currentFilterGenre: `All genres`,
        renderedMoviesCount: MOVIES_COUNT_PER_STEP
      };
    default:
      return state;
  }
};

export {reducer};
