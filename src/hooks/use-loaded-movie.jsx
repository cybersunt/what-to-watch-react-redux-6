import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentMovie} from "../store/movie-data/movie-data-api-actions";

const useLoadedMovie = (id) => {
  const dispatch = useDispatch();
  const {currentMovie, isCurrentMovieLoaded} = useSelector((state) => state.DATA_ITEM);

  useEffect(() => {
    if (!isCurrentMovieLoaded || !currentMovie || id !== currentMovie.id) {
      dispatch(fetchCurrentMovie(id));
    }
  }, [id, currentMovie, isCurrentMovieLoaded]);

  return [currentMovie, isCurrentMovieLoaded];
};

export default useLoadedMovie;

