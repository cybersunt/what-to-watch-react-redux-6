import {combineReducers} from 'redux';
import {moviesData} from "./reducers/movies-data";
import {movieData} from "./reducers/movie-data";
import {moviesFilter} from "./reducers/movies-filter";
import {userData} from "./reducers/user-data";
import {userActions} from "./reducers/user-actions";
import {catchError} from "./reducers/catch-error";

export const NameSpace = {
  DATA: `DATA`,
  DATA_ITEM: `DATA_ITEM`,
  FILTERS: `FILTERS`,
  USER_DATA: `USER_DATA`,
  USER_ACTIONS: `USER_ACTIONS`,
  ERROR: `ERROR`
};

export default combineReducers({
  [NameSpace.DATA]: moviesData,
  [NameSpace.DATA_ITEM]: movieData,
  [NameSpace.FILTERS]: moviesFilter,
  [NameSpace.USER_DATA]: userData,
  [NameSpace.USER_ACTIONS]: userActions,
  [NameSpace.ERROR]: catchError
});
