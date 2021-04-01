import {transformMovie} from "../../utils/utils";
import {loadComments, loadCurrentMovie, loadPromoMovie, loadUpdateCurrentMovie} from "./movie-data-action";
import {APIRoute} from "../../constants/constants";

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

export const fetchUpdateCurrentMovie = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data})=> transformMovie(data))
    .then((data) => dispatch(loadUpdateCurrentMovie(data)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadComments(data)))
    .catch(() => {})
);
