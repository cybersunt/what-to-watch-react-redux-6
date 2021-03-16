import React, {useEffect} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import Catalog from "../../sections/catalog/catalog";
import PageFooter from "../../sections/page-footer/page-footer";
import {connect} from "react-redux";
import {fetchCurrentMovie} from "../../../store/api-actions";

const MoviePage = ({match, currentMovie, isCurrentMovieLoaded, onLoadData}) => {

  const {id} = match.params;

  useEffect(() => {
    if (!isCurrentMovieLoaded) {
      onLoadData(id);
    }
  }, [id, isCurrentMovieLoaded]);

  const currentMovieGenre = currentMovie.genre;

  return isCurrentMovieLoaded ? (
    <MainLayout>
      <MovieCard type="full" currentMovie={currentMovie}/>
      <InnerLayout className={`page-content`}>
        <Catalog currentMovieGenre={currentMovieGenre} className={`catalog--like-this`} title={`More like this`}/>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>) : null;
};

MoviePage.propTypes = {...MovieCard.propTypes};

const mapStateToProps = (state) => ({
  currentMovie: state.currentMovie,
  isCurrentMovieLoaded: state.isCurrentMovieLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchCurrentMovie(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
