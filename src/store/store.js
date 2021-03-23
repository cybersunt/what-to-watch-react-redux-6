import {reducer} from "./reducer";
import {AuthorizationStatus} from "../constants/auth";
import {createAPI} from "../services/api";
import {redirect} from "./middlewares/redirect";
import {requireAuthorization} from "./user-data/user-data-action";
import {configureStore} from "@reduxjs/toolkit";
import {fetchPromoMovie} from "./movie-data/movie-data-api-actions";
import {checkAuth} from "./user-data/user-data-api-action";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());
store.dispatch(fetchPromoMovie());

export default store;
