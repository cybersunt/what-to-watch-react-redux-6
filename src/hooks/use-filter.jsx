import {useEffect, useState} from "react";

const useFilter = (isDataLoaded, movies, currentGenre)=> {
  const [isFilteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    if (isDataLoaded) {
      const filteredMovies = movies.filter(({genre}) => currentGenre === `All genres` ? genre : genre === currentGenre);
      setFilteredMovies(filteredMovies);
    }
  }, [isDataLoaded, currentGenre]);

  return isFilteredMovies;
};

export default useFilter;
