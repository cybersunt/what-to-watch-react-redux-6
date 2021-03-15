import React, {useEffect} from "react";
import ButtonShowMore from "../../blocks/button-show-more/button-show-more";
import MoviesList from "../../blocks/movies-list/movies-list";
import PropTypes from "prop-types";
import GenresList from "../../blocks/genres-list/genres-list";
import classnames from "classnames";
import MovieCard from "../movie-card/movie-card";
import {connect} from "react-redux";
import {fetchMoviesList} from "../../../store/api-actions";
import Loader from "../../blocks/loader/loader";
import {showMoreMovies} from "../../../store/actions";
import useFilter from "../../../hooks/use-filter";

const Catalog = ({movies, isDataLoaded, onLoadData, currentGenre, renderedMoviesCount, onButtonShowMoreClick, currentMovieGenre, filter = false, title = `Catalog`, className}) => {

  const filteredMovies = useFilter(isDataLoaded, movies, currentGenre);
  const similarMovies = movies.filter(({genre}) => genre === currentMovieGenre);
  const moviesItems = currentMovieGenre ? similarMovies : filteredMovies;
  const movieList = moviesItems.slice(0, Math.min(moviesItems.length, renderedMoviesCount));

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  return isDataLoaded ?
    (<section className={(classnames(`catalog`, className))}>
      <h2 className={classnames(`catalog-title`, {[`visually-hidden`]: title === `Catalog`})}>{title}</h2>

      {filter ? <GenresList /> : null}

      <MoviesList movieItems={movieList}/>

      {moviesItems.length > renderedMoviesCount ? <ButtonShowMore onClick={onButtonShowMoreClick}/> : null}

    </section>) : <Loader/>;
};

Catalog.propTypes = {
  ...MovieCard.propTypes,
  ...GenresList.propTypes,
  className: PropTypes.string,
  filter: PropTypes.bool,
  title: PropTypes.string,
  currentMovieGenre: PropTypes.string
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
  movies: state.movies,
  currentGenre: state.currentGenre,
  renderedMoviesCount: state.renderedMoviesCount
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMoviesList());
  },
  onButtonShowMoreClick() {
    dispatch(showMoreMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
