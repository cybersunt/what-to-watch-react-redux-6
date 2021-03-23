import {combineReducers} from 'redux';
import {moviesData} from "./movies-data/movies-data-reducer";
import {moviesFilter} from "./movies-filter/movies-filter-reducer";
import {userData} from "./user-data/user-data-reducer";
import {userActions} from "./user-actions/user-actions-reducer";
import {errorReducer} from "./error/error-reducer";
import {movieData} from "./movie-data/movie-data-reducer";

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
  [NameSpace.ERROR]: errorReducer
});
