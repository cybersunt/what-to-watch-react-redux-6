import {
  addFavoriteMovie,
  loadAuthInfo,
  loadCurrentMovie,
  loadFavoriteMovies,
  loadMovies,
  loadPromoMovie,
  loadComments,
  logOut,
  redirectToRoute,
  requireAuthorization,
  addComment, catchError,
} from "./actions";
import {AuthorizationStatus} from "../constants/auth";
import {APIRoute, RoutePath} from "../constants/routes";
import {transformMovie, transformUserData} from "../utils/utils";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((item) => transformMovie(item)))
    .then((data) => dispatch(loadMovies(data)))
);

export const fetchCurrentMovie = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data})=> transformMovie(data))
    .then((data) => dispatch(loadCurrentMovie(data)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data})=> transformMovie(data))
    .then((data) => dispatch(loadPromoMovie(data)))
);

export const fetchMyMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MY_LIST)
    .then(({data}) => data.length === 0 ? data : data.map((item) => transformMovie(item)))
    .then((data) => dispatch(loadFavoriteMovies(data)))
);

export const addMovie = ({filmId, status}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.MY_LIST}/${filmId}/${status}`, {filmId, status})
    .then(({data}) => dispatch(addFavoriteMovie(data)))
    .then((data) => dispatch(loadFavoriteMovies(data)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadComments(data)))
    .catch(() => {})
);

export const addReview = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(addComment(data)))
    .then(() => dispatch(redirectToRoute(`${RoutePath.FILMS}${id}`)))
    .catch(()=> dispatch(catchError()))
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
    .catch(()=> dispatch(catchError()))
);

export const logout = ({login: email, password}) => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(logOut(AuthorizationStatus.NO_AUTH)))
);

