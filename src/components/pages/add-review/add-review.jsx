import React, {useEffect} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Loader from "../../blocks/loader/loader";
import {fetchCurrentMovie} from "../../../store/movie-data/movie-data-api-actions";

const AddReview = () => {
  const {id} = useParams();

  const isCurrentMovieLoaded = useSelector((state) => state.isCurrentMovieLoaded);
  const currentMovie = useSelector((state) => state.currentMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isCurrentMovieLoaded || !currentMovie) {
      dispatch(fetchCurrentMovie(id));
    }
  }, [id, isCurrentMovieLoaded, currentMovie]);

  return isCurrentMovieLoaded ? (
    <MainLayout>
      <MovieCard type="review" currentMovie={currentMovie}/>
    </MainLayout>
  ) : <div className="movie-card" style={{height: `100vh`, display: `flex`, alignItems: `center`}}><Loader/></div>;
};
export default AddReview;
