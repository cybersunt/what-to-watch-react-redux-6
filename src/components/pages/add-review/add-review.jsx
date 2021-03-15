import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import useMovie from "../../../hooks/use-movie";
import {connect} from "react-redux";
import MoviesList from "../../blocks/movies-list/movies-list";

const AddReview = ({movies}) => {

  const currentMovie = useMovie(movies);

  return (
    <MainLayout>
      <MovieCard type="review" currentMovie={currentMovie}/>
    </MainLayout>
  );
};

AddReview.propTypes = {...MoviesList.propTypes};

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps)(AddReview);
