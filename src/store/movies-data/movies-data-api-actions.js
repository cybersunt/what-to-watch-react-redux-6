import {APIRoute} from "../../constants/routes";
import {transformMovie} from "../../utils/utils";
import {loadMovies} from "./movies-data-action";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((item) => transformMovie(item)))
    .then((data) => dispatch(loadMovies(data)))
);
