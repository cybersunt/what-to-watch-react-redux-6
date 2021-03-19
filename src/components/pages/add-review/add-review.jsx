import React, {useEffect} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import {connect} from "react-redux";
import MoviesList from "../../blocks/movies-list/movies-list";
import {fetchCurrentMovie} from "../../../store/api-actions";
import {useParams} from "react-router-dom";

const AddReview = ({currentMovie, isCurrentMovieLoaded, onLoadData}) => {

  const {id} = useParams();

  useEffect(() => {
    if (!isCurrentMovieLoaded || currentMovie) {
      onLoadData(id);
    }
  }, [id, isCurrentMovieLoaded, currentMovie]);

  return (
    <MainLayout>
      <MovieCard type="review" currentMovie={currentMovie}/>
    </MainLayout>
  );
};

AddReview.propTypes = {...MoviesList.propTypes};

const mapStateToProps = (state) => ({
  currentMovie: state.currentMovie,
  isCurrentMovieLoaded: state.isCurrentMovieLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchCurrentMovie(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
