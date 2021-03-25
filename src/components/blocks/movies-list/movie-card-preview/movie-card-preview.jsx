import React from 'react';
import PropTypes from 'prop-types';
import Link from "../../link/link";
import {RoutePath} from "../../../../constants/constants";

const MovieCardPreview = ({id, name, previewImage, onMouseEnter, onMouseLeave}) => {
  return (
    <article id={id} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <img src={previewImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link pathName={`${RoutePath.FILMS}${id}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};


MovieCardPreview.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default MovieCardPreview;
