import React from "react";
import PropTypes from "prop-types";
import {RoutePath} from "../../../../constants/routes";
import {useParams} from "react-router";
import Link from "../../link/link";
import {useHistory} from "react-router-dom";
import promoMovie from "../../../../mocks/promo-movie";

const MovieCardButtons = ({fullVersion}) => {
  const history = useHistory();
  const {id} = useParams();

  const onButtonPlayClick = ()=> id ? history.push(`${RoutePath.PLAYER}${id}`) : history.push(`${RoutePath.PLAYER}${promoMovie.id}`);

  return (
    <div className="movie-card__buttons">
      <button className="btn btn--play movie-card__button" type="button" onClick={onButtonPlayClick}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>

      {fullVersion ? <Link pathName={`${RoutePath.FILMS}${id}/review`} className="btn movie-card__button">Add review</Link> : null}
    </div>
  );
};

MovieCardButtons.propTypes = {
  fullVersion: PropTypes.bool
};

export default MovieCardButtons;
