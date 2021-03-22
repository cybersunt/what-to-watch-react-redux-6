import {AuthorizationStatus} from "../constants/auth";
import {MOVIES_COUNT_PER_STEP} from "../constants/common";
import {ActionMovieType} from "./actions/movie-data";
import {ActionDataType} from "./actions/movies-data";
import {ActionErrorType} from "./actions/catch-error";
import {ActionFilterType} from "./actions/movies-filter";
import {ActionUserActType} from "./actions/user-actions";
import {ActionAuthType} from "./actions/user-data";

const initialState = {
  isDataLoaded: false,
  isUserDataReceived: false,
  isCurrentMovieLoaded: false,
  isReviewsLoaded: false,
  isReviewUploaded: false,
  isMyDataLoaded: false,
  isCatchError: false,
  authorizationStatus: AuthorizationStatus.AUTH,
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
    case ActionDataType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isDataLoaded: true
      };

    case ActionMovieType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        promoMovie: action.payload
      };
    case ActionMovieType.LOAD_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
        isCurrentMovieLoaded: true
      };
    case ActionMovieType.LOAD_COMMENTS:
      return {
        ...state,
        reviews: action.payload,
        isReviewsLoaded: true
      };

    case ActionErrorType.CATCH_ERROR:
      return {
        ...state,
        isCatchError: true
      };

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

    case ActionUserActType.LOAD_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload,
        isMyDataLoaded: true
      };
    case ActionUserActType.ADD_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovies: action.payload
      };
    case ActionUserActType.ADD_COMMENT:
      return {
        ...state,
        reviews: action.payload,
        isReviewUploaded: true,
      };

    case ActionAuthType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionAuthType.LOAD_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload,
        isUserDataReceived: true
      };
    case ActionAuthType.LOG_OUT:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
