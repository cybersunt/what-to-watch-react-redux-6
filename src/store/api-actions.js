import {
  loadAuthInfo,
  loadCurrentMovie,
  loadMovies,
  loadPromoMovie, loadReviews,
  logOut,
  redirectToRoute,
  requireAuthorization,
} from "./actions";
import {AuthorizationStatus} from "../constants/auth";
import {APIRoute, RoutePath} from "../constants/routes";
import {transformMovie, transformUserData} from "../utils/utils";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((item) => transformMovie(item)))
    .then((data) => dispatch(loadMovies(data)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data})=> transformMovie(data))
    .then((data) => dispatch(loadPromoMovie(data)))
);

export const fetchCurrentMovie = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data})=> transformMovie(data))
    .then((data) => dispatch(loadCurrentMovie(data)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data)))
);

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
);

export const logout = ({login: email, password}) => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(logOut(AuthorizationStatus.NO_AUTH)))
);

