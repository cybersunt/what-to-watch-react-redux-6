import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {requireAuthorization} from "./actions";
import {AuthorizationStatus} from "../components/constants/auth";
import {createAPI} from "../services/api";
import {checkAuth} from "./api-actions";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

store.dispatch(checkAuth());

export default store;
