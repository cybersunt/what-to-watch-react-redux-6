import {transformUserData} from "../../utils/utils";
import {loadAuthInfo, logOut, requireAuthorization} from "./user-data-action";
import {redirectToRoute} from "../middlewares/redirect-action";
import {catchError} from "../error/error-action";
import {APIRoute, AuthorizationStatus, RoutePath} from "../../constants/constants";

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => transformUserData(data))
    .then((data) => dispatch(loadAuthInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => transformUserData(data))
    .then((data) => dispatch(loadAuthInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(RoutePath.ROOT)))
    .catch(()=> dispatch(catchError()))
);

export const logout = ({login: email, password}) => (dispatch, _getState, api) => (
  api.get(APIRoute.LOG_OUT, {email, password})
    .then(({data}) => dispatch(logOut(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);
