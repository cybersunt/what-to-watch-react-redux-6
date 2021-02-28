import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {RoutePath} from "../../../constants/routes";
import Link from "../../link/link";

// eslint-disable-next-line react/display-name
const MovieCardPreview = forwardRef(({id, name, previewImage, onMouseDown}, ref) => (
  <article ref={ref} id={id} className="small-movie-card catalog__movies-card" onMouseDown={onMouseDown}>
    <div className="small-movie-card__image">
      <img src={previewImage} alt={name} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <Link pathName={`${RoutePath.FILMS}${id}`} className="small-movie-card__link">{name}</Link>
    </h3>
  </article>
));

MovieCardPreview.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  onMouseDown: PropTypes.func
};

export default MovieCardPreview;
