import React, {useEffect} from "react";
import ButtonShowMore from "../../blocks/button-show-more/button-show-more";
import MoviesList from "../../blocks/movies-list/movies-list";
import PropTypes from "prop-types";
import GenresList from "../../blocks/genres-list/genres-list";
import classnames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../blocks/loader/loader";
import {showMoreMovies} from "../../../store/movies-filter/movies-filter-action";
import useFilter from "../../../hooks/use-filter";
import {fetchMoviesList} from "../../../store/movies-data/movies-data-api-actions";
import {fetchMyMoviesList} from "../../../store/user-actions/user-actions-api-action";
import {AuthorizationStatus, DEFAULT_CATALOG_TITLE, MAX_SIMILAR_MOVIES} from "../../../constants/constants";

const Catalog = ({favorites = false, filter = false, title = DEFAULT_CATALOG_TITLE, className, currentMovieGenre}) => {

  const {authorizationStatus} = useSelector((state) => state.USER_DATA);
  const {movies, isDataLoaded} = useSelector((state) => state.DATA);
  const {favoriteMovies, isMyDataLoaded} = useSelector((state) => state.USER_ACTIONS);
  const {currentFilterGenre, renderedMoviesCount} = useSelector((state) => state.FILTERS);

  const dispatch = useDispatch();

  const filteredMovies = useFilter(isDataLoaded, movies, currentFilterGenre);
  const similarMovies = movies.filter(({genre}) => genre === currentMovieGenre);
  const limitedSimilarMovies = similarMovies.length > MAX_SIMILAR_MOVIES ? similarMovies.slice(0, Math.min(similarMovies.length, MAX_SIMILAR_MOVIES)) : similarMovies;
  const moviesItems = currentMovieGenre ? limitedSimilarMovies : filteredMovies;
  const definedMovies = favorites ? favoriteMovies : moviesItems;
  const limitedMoviesList = definedMovies.length > renderedMoviesCount ? definedMovies.slice(0, Math.min(moviesItems.length, renderedMoviesCount)) : definedMovies;
  const moviesList = definedMovies.length === 0 ? definedMovies : limitedMoviesList;

  const handleButtonShowMoreClick = ()=> {
    dispatch(showMoreMovies());
  };

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchMoviesList());
    }
  }, [isDataLoaded]);

  useEffect(() => {
    if ((authorizationStatus === AuthorizationStatus.AUTH && favorites) && (!isMyDataLoaded || favoriteMovies)) {
      dispatch(fetchMyMoviesList());
    }
  }, [isMyDataLoaded, favorites]);

  return (isDataLoaded || isMyDataLoaded) ?
    (<section className={(classnames(`catalog`, className))}>
      <h2 className={classnames(`catalog-title`, {[`visually-hidden`]: title === DEFAULT_CATALOG_TITLE})}>{title}</h2>

      {filter ? <GenresList /> : null}

      <MoviesList movieItems={moviesList}/>

      {definedMovies.length > renderedMoviesCount ? <ButtonShowMore onClick={handleButtonShowMoreClick}/> : null}

    </section>) : <Loader container={false}/>;
};

Catalog.propTypes = {
  favorites: PropTypes.bool,
  filter: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  currentMovieGenre: PropTypes.string
};

export default Catalog;
