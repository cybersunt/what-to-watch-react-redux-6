import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import {useParams} from "react-router-dom";
import Loader from "../../blocks/loader/loader";
import useLoadedMovie from "../../../hooks/use-loaded-movie";

const AddReview = () => {
  const {id} = useParams();

  const [currentMovie, isCurrentMovieLoaded] = useLoadedMovie(id);

  return isCurrentMovieLoaded ? (
    <MainLayout>
      <MovieCard type="review" currentMovie={currentMovie}/>
    </MainLayout>
  ) : <div className="movie-card" style={{height: `100vh`, display: `flex`, alignItems: `center`}}><Loader/></div>;
};
export default AddReview;
