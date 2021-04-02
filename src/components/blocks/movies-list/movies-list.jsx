import React from "react";
import PropTypes from "prop-types";
import MovieCardPreviewWithVideo from "../../../hocs/movie-card-preview-with-video";

const MoviesList = ({movieItems}) => {
  return (
    <div className="catalog__movies-list">
      {movieItems.map(({id, name, videoLink, previewImage, posterImage}) => (
        <MovieCardPreviewWithVideo
          id={id}
          key={id}
          name={name}
          videoLink={videoLink}
          previewImage={previewImage}
          posterImage={posterImage}/>
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movieItems: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        previewImage: PropTypes.string
      })
  ),
};

export default MoviesList;
