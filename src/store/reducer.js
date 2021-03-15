import {ActionType} from "./actions";
import {AuthorizationStatus} from "../constants/auth";
import {MOVIES_COUNT_PER_STEP} from "../constants/common";

export const initialState = {
  isDataLoaded: false,
  isUserDataReceived: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {},
  movies: [],
  currentGenre: `All genres`,
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
        currentGenre: action.payload
      };
    case ActionType.RESET_FILTER:
      return {
        ...state,
        currentGenre: `All genres`,
        renderedMoviesCount: MOVIES_COUNT_PER_STEP
      };
    default:
      return state;
  }
};

export {reducer};
