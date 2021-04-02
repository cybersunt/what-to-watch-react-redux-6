import React, {useState} from 'react';
import MovieCardPreview from "../components/blocks/movies-list/movie-card-preview/movie-card-preview";
import VideoPlayer from "../components/sections/video-player/video-player";
import PropTypes from "prop-types";
import {getUpperCaseStringWithoutSpaces} from "../utils/utils";
import {TIMEOUT_MSEC} from "../constants/constants";

const MovieCardPreviewWithVideo = ({videoLink, id, name, previewImage}) => {

  const key = getUpperCaseStringWithoutSpaces(name);
  const [activeKey, setActiveKey] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseLeave = (evt) => {
    evt.preventDefault();
    setTimeoutId(clearTimeout(timeoutId));
    setActiveKey(null);
  };

  const handleMouseEnter = (evt)=> {
    evt.preventDefault();
    setTimeoutId(clearTimeout(timeoutId));
    setTimeoutId(setTimeout(()=> setActiveKey(id), TIMEOUT_MSEC));
  };

  return (
    <>
      {activeKey === id ?
        <VideoPlayer
          id={id}
          key={key}
          src={videoLink}
          previewImage={previewImage}
          isMuted={true}
          onMouseLeave={handleMouseLeave}/> :
        <MovieCardPreview
          id={id}
          key={key}
          name={name}
          previewImage={previewImage}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}/>}
    </>
  );
};

MovieCardPreviewWithVideo.propTypes = {
  id: PropTypes.number,
  videoLink: PropTypes.string,
  name: PropTypes.string,
  previewImage: PropTypes.string,
};

export default MovieCardPreviewWithVideo;
