import {loadAuthInfo, loadMovies, logOut, redirectToRoute, requireAuthorization} from "./actions";
import {AuthorizationStatus} from "../constants/auth";
import {APIRoute, RoutePath} from "../constants/routes";
import {transformMovie, transformUserData} from "../utils/utils";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((item) => transformMovie(item)))
    .then((data) => dispatch(loadMovies(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => transformUserData(response.data))
    .then((data) => dispatch(loadAuthInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => transformUserData(response.data))
    .then((data) => dispatch(loadAuthInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(RoutePath.ROOT)))
);

export const logout = ({login: email, password}) => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(logOut(AuthorizationStatus.NO_AUTH)))
);

