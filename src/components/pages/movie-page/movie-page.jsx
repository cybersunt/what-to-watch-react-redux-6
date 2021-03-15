import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import Catalog from "../../sections/catalog/catalog";
import PageFooter from "../../sections/page-footer/page-footer";
import useMovie from "../../../hooks/use-movie";
import {connect} from "react-redux";

const MoviePage = ({movies}) => {

  const currentMovie = useMovie(movies);
  const currentMovieGenre = currentMovie.genre;

  return (
    <MainLayout>
      <MovieCard type="full" currentMovie={currentMovie}/>
      <InnerLayout className={`page-content`}>
        <Catalog currentMovieGenre={currentMovieGenre} className={`catalog--like-this`} title={`More like this`}/>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>
  );
};

MoviePage.propTypes = {...MovieCard.propTypes};

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviePage);
