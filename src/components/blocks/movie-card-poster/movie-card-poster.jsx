import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const MovieCardPoster = ({size, posterImage, name}) => {
  return (
    <div className={classnames(`movie-card__poster`,
        {[`movie-card__poster--small`]: size === `small`,
          [`movie-card__poster--big`]: size === `big`})}>
      <img src={posterImage} alt={name} width="218" height="327"/>
    </div>
  );
};

MovieCardPoster.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  posterImage: PropTypes.string
};

export default MovieCardPoster;
