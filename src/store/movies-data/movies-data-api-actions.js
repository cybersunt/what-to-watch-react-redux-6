import {transformMovie} from "../../utils/utils";
import {loadMovies} from "./movies-data-action";
import {APIRoute} from "../../constants/constants";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((item) => transformMovie(item)))
    .then((data) => dispatch(loadMovies(data)))
);
