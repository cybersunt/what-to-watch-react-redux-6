import React from "react";
import PropTypes from "prop-types";
import ActiveVideoPlayer from "../../../hocs/active-video-player";

const MoviesList = ({movieItems}) => {

  return (
    <div className="catalog__movies-list">
      {movieItems.map(({id, name, videoLink, previewImage}) => (
        <ActiveVideoPlayer
          id={id}
          key={id}
          name={name}
          videoLink={videoLink}
          previewImage={previewImage}/>
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
