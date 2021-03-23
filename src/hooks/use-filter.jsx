import {useEffect, useState} from "react";
import {DEFAULT_MOVIE_GENRE} from "../constants/constants";

const useFilter = (isDataLoaded, movies, currentGenre)=> {
  const [isFilteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    if (isDataLoaded) {
      const filteredMovies = movies.filter(({genre}) => currentGenre === DEFAULT_MOVIE_GENRE ? genre : genre === currentGenre);
      setFilteredMovies(filteredMovies);
    }
  }, [isDataLoaded, currentGenre]);

  return isFilteredMovies;
};

export default useFilter;
