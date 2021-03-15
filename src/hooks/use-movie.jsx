import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const useMovie = (movies) => {
  const {id} = useParams();
  const itemId = Number(id);

  const movie = movies.find((item) => item.id === itemId);

  const [currentMovie, setCurrentMovie] = useState(movie);

  useEffect(()=> {
    if (currentMovie.id !== itemId) {
      setCurrentMovie(movie);
    }
  }, [itemId]);

  return currentMovie;
};

export default useMovie;

