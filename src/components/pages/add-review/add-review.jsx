import React, {useEffect} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import {connect} from "react-redux";
import MoviesList from "../../blocks/movies-list/movies-list";
import {useParams} from "react-router-dom";
import Loader from "../../blocks/loader/loader";
import {fetchCurrentMovie} from "../../../store/movie-data/movie-data-api-actions";

const AddReview = ({currentMovie, isCurrentMovieLoaded, onLoadData}) => {

  const {id} = useParams();

  useEffect(() => {
    if (!isCurrentMovieLoaded || currentMovie) {
      onLoadData(id);
    }
  }, [id, isCurrentMovieLoaded, currentMovie]);

  return isCurrentMovieLoaded ? (
    <MainLayout>
      <MovieCard type="review" currentMovie={currentMovie}/>
    </MainLayout>
  ) : <div className="movie-card" style={{height: `100vh`, display: `flex`, alignItems: `center`}}><Loader/></div>;
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
