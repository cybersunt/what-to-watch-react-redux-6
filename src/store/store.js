import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {AuthorizationStatus} from "../constants/auth";
import {createAPI} from "../services/api";
import {checkAuth, fetchPromoMovie} from "./api-actions";
import {redirect} from "./middlewares/redirect";
import {requireAuthorization} from "./actions/user-data";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
));

store.dispatch(checkAuth());
store.dispatch(fetchPromoMovie());

export default store;
