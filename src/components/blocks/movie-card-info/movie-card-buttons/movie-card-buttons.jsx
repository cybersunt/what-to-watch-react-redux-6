import React from "react";
import PropTypes from "prop-types";
import {useParams} from "react-router";
import Link from "../../link/link";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addMovieMyMovieList} from "../../../../store/user-actions/user-actions-api-action";
import {AuthorizationStatus, RoutePath, STATUS_ADD_MOVIE} from "../../../../constants/constants";

const MovieCardButtons = ({fullVersion}) => {
  const history = useHistory();
  const {id} = useParams();

  const {promoMovie} = useSelector((state) => state.DATA_ITEM);
  const {authorizationStatus} = useSelector((state) => state.USER_DATA);
  const dispatch = useDispatch();

  const handleButtonPlayClick = () => id ? history.push(`${RoutePath.PLAYER}${id}`) : history.push(`${RoutePath.PLAYER}${promoMovie.id}`);

  const onSubmit = () => {
    return id === undefined ?
      dispatch(addMovieMyMovieList({filmId: promoMovie.id, status: STATUS_ADD_MOVIE})) :
      dispatch(addMovieMyMovieList({filmId: id, status: STATUS_ADD_MOVIE}));
  };

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
          <use xlinkHref="#add"></use>
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
