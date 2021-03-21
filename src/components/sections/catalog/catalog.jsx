import React, {useEffect} from "react";
import ButtonShowMore from "../../blocks/button-show-more/button-show-more";
import MoviesList from "../../blocks/movies-list/movies-list";
import PropTypes from "prop-types";
import GenresList from "../../blocks/genres-list/genres-list";
import classnames from "classnames";
import MovieCard from "../movie-card/movie-card";
import {connect} from "react-redux";
import {fetchMoviesList, fetchMyMoviesList} from "../../../store/api-actions";
import Loader from "../../blocks/loader/loader";
import {showMoreMovies} from "../../../store/actions";
import useFilter from "../../../hooks/use-filter";

const Catalog = ({movies, isDataLoaded, onLoadData, favoriteMovies, isMyDataLoaded, onLoadMyList, currentFilterGenre, renderedMoviesCount, onButtonShowMoreClick, currentMovieGenre, favorites = false, filter = false, title = `Catalog`, className}) => {

  const filteredMovies = useFilter(isDataLoaded, movies, currentFilterGenre);
  const similarMovies = movies.filter(({genre}) => genre === currentMovieGenre);
  const moviesItems = currentMovieGenre ? similarMovies : filteredMovies;
  const definedMovies = favorites ? favoriteMovies : moviesItems;
  const limitedMoviesList = definedMovies.length > renderedMoviesCount ? definedMovies.slice(0, Math.min(moviesItems.length, renderedMoviesCount)) : definedMovies;
  const moviesList = definedMovies.length === 0 ? definedMovies : limitedMoviesList;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  useEffect(() => {
    if (!isMyDataLoaded) {
      onLoadMyList();
    }
  }, [isMyDataLoaded]);

  return (isDataLoaded || isMyDataLoaded) ?
    (<section className={(classnames(`catalog`, className))}>
      <h2 className={classnames(`catalog-title`, {[`visually-hidden`]: title === `Catalog`})}>{title}</h2>

      {filter ? <GenresList /> : null}

      <MoviesList movieItems={moviesList}/>

      {definedMovies.length > renderedMoviesCount ? <ButtonShowMore onClick={onButtonShowMoreClick}/> : null}

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
  currentFilterGenre: state.currentFilterGenre,
  renderedMoviesCount: state.renderedMoviesCount,
  isMyDataLoaded: state.isMyDataLoaded,
  favoriteMovies: state.favoriteMovies
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMoviesList());
  },
  onButtonShowMoreClick() {
    dispatch(showMoreMovies());
  },
  onLoadMyList() {
    dispatch(fetchMyMoviesList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
