import {reducer} from "./reducer";
import {AuthorizationStatus} from "../constants/auth";
import {createAPI} from "../services/api";
import {checkAuth, fetchPromoMovie} from "./api-actions";
import {redirect} from "./middlewares/redirect";
import {requireAuthorization} from "./actions/user-data-action";
import {configureStore} from "@reduxjs/toolkit";

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
