import {combineReducers} from 'redux';
import {moviesData} from "./reducers/movies-data-reducer";
import {moviesFilter} from "./reducers/movies-filter-reducer";
import {userDataReducer} from "./reducers/user-data-reducer";
import {userActions} from "./reducers/user-actions-reducer";
import {errorReducer} from "./reducers/error-reducer";
import {movieData} from "./reducers/movie-data-reducer";

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
  [NameSpace.USER_DATA]: userDataReducer,
  [NameSpace.USER_ACTIONS]: userActions,
  [NameSpace.ERROR]: errorReducer
});
