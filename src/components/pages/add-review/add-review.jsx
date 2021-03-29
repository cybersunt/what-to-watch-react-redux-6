import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import {useParams} from "react-router-dom";
import useLoadedMovie from "../../../hooks/use-loaded-movie";
import Loader from "../../blocks/loader/loader";

const AddReview = () => {
  const {id} = useParams();

  const [currentMovie, isCurrentMovieLoaded] = useLoadedMovie(id);

  return (
    <MainLayout>
      {isCurrentMovieLoaded ? <MovieCard type="review" currentMovie={currentMovie}/> : <Loader container fullscreen/>}
    </MainLayout>
  );
};
export default AddReview;
