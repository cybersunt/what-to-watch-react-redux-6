import React from "react";
import PropTypes from "prop-types";
import {RoutePath} from "../../../../constants/routes";
import {useParams} from "react-router";
import Link from "../../link/link";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {addMovie} from "../../../../store/api-actions";
import {AuthorizationStatus} from "../../../../constants/auth";

const STATUS_ADD_MOVIE = 1;

const MovieCardButtons = ({fullVersion, authorizationStatus, promoMovie, onSubmit}) => {
  const history = useHistory();
  const {id} = useParams();

  const onButtonPlayClick = ()=> id ? history.push(`${RoutePath.PLAYER}${id}`) : history.push(`${RoutePath.PLAYER}${promoMovie.id}`);

  const handleSubmit = () => {
    return id === undefined ?
      onSubmit({filmId: promoMovie.id, status: STATUS_ADD_MOVIE}) :
      onSubmit({filmId: id, status: STATUS_ADD_MOVIE});
  };

  return (
    <div className="movie-card__buttons">
      <button className="btn btn--play movie-card__button" type="button" onClick={onButtonPlayClick}>
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

      {fullVersion && authorizationStatus === AuthorizationStatus.AUTH ? <Link pathName={`${RoutePath.FILMS}${id}/review`} className="btn movie-card__button">Add review</Link> : null}
    </div>
  );
};

MovieCardButtons.propTypes = {
  fullVersion: PropTypes.bool,
  promoMovie: PropTypes.object,
  onSubmit: PropTypes.func,
  authorizationStatus: PropTypes.string
};

const mapStateToProps = (state) => ({
  promoMovie: state.promoMovie,
  favoriteMovies: state.favoriteMovies,
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit({filmId, status}) {
    dispatch(addMovie({filmId, status}));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardButtons);
