import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {useParams} from "react-router";
import Link from "../../link/link";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  addMovieToMyMovieList,
  deleteMovieFromMyMovieList,
} from "../../../../store/user-actions/user-actions-api-action";
import {
  AuthorizationStatus,
  ICON_NAME_ADD,
  ICON_NAME_DELETE,
  RoutePath,
  STATUS_ADD_MOVIE, STATUS_DELETE_MOVIE,
} from "../../../../constants/constants";

const MovieCardButtons = ({fullVersion}) => {
  const history = useHistory();
  const {id} = useParams();
  const {isCatchError} = useSelector((state) => state.ERROR);
  const {promoMovie, currentMovie} = useSelector((state) => state.DATA_ITEM);
  const {authorizationStatus} = useSelector((state) => state.USER_DATA);
  const dispatch = useDispatch();
  const movieId = id === undefined ? promoMovie.id : currentMovie.id;
  const activeMovie = id === undefined ? promoMovie : currentMovie;
  const [actualMovie, setActualMovie] = useState(activeMovie);
  const {isFavorite} = actualMovie;

  const iconButtonMyList = isFavorite ? ICON_NAME_DELETE : ICON_NAME_ADD;

  useEffect(()=> {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      setActualMovie(Object.assign({}, activeMovie, {
        isFavorite: false
      }));
    }
  }, [authorizationStatus]);

  const handleButtonPlayClick = () => id ? history.push(`${RoutePath.PLAYER}${id}`) : history.push(`${RoutePath.PLAYER}${promoMovie.id}`);

  const addFavoriteMovie = () => {
    dispatch(addMovieToMyMovieList({filmId: movieId, status: STATUS_ADD_MOVIE}));
    if (!isCatchError) {
      setActualMovie(Object.assign({}, activeMovie, {
        isFavorite: true
      }));
    }
  };

  const deleteFavoriteMovie = () => {
    dispatch(deleteMovieFromMyMovieList({filmId: movieId, status: STATUS_DELETE_MOVIE}));
    if (!isCatchError) {
      setActualMovie(Object.assign({}, activeMovie, {
        isFavorite: false
      }));
    }
  };

  const onSubmit = isFavorite ? deleteFavoriteMovie : addFavoriteMovie;

  const handleSubmit = authorizationStatus === AuthorizationStatus.AUTH ? onSubmit : ()=> history.push(RoutePath.LOGIN);

  return (
    <div className="movie-card__buttons">
      <button className="btn btn--play movie-card__button" type="button" onClick={handleButtonPlayClick}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>

      <button className="btn btn--list movie-card__button" type="button" onClick={handleSubmit}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={iconButtonMyList}></use>
        </svg>
        <span>My list</span>
      </button>

      {fullVersion && authorizationStatus === AuthorizationStatus.AUTH ?
        <Link pathName={`${RoutePath.FILMS}${id}/review`} className="btn movie-card__button">Add review</Link> : null}
    </div>
  );
};

MovieCardButtons.propTypes = {
  fullVersion: PropTypes.bool,
};

export default MovieCardButtons;
