import {transformMovie} from "../../utils/utils";
import {addComment, addFavoriteMovie, loadFavoriteMovies} from "./user-actions-action";
import {redirectToRoute} from "../middlewares/redirect-action";
import {catchError} from "../error/error-action";
import {APIRoute, RoutePath} from "../../constants/constants";

export const fetchMyMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MY_LIST)
    .then(({data}) => data.length === 0 ? data : data.map((item) => transformMovie(item)))
    .then((data) => dispatch(loadFavoriteMovies(data)))
);

export const addMovieMyMovieList = ({filmId, status}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.MY_LIST}/${filmId}/${status}`, {filmId, status})
    .then(({data}) => dispatch(addFavoriteMovie(data)))
    // .then((data) => dispatch(loadFavoriteMovies(data)))
);

export const addReview = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(addComment(data)))
    .then(() => dispatch(redirectToRoute(`${RoutePath.FILMS}${id}`)))
    .catch(()=> dispatch(catchError()))
);
