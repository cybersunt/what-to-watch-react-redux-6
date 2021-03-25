import React, {useState} from 'react';
import MovieCardPreview from "../components/blocks/movies-list/movie-card-preview/movie-card-preview";
import VideoPlayer from "../components/sections/video-player/video-player";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {getUpperCaseStringWithoutSpaces} from "../utils/utils";
import {RoutePath, TIMEOUT_MSEC} from "../constants/constants";

const MovieCardPreviewWithVideo = ({videoLink, id, name, previewImage}) => {

  const key = getUpperCaseStringWithoutSpaces(name);
  const history = useHistory();
  const [activeKey, setActiveKey] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const onMouseLeave = () => {
    setTimeoutId(clearTimeout(timeoutId));
    setActiveKey(null);
  };

  const onMouseEnter = (evt)=> {
    evt.preventDefault();
    setTimeoutId(clearTimeout(timeoutId));
    setTimeoutId(setTimeout(()=> setActiveKey(id), TIMEOUT_MSEC));
  };

  return (
    <>
      {activeKey === id ?
        <VideoPlayer
          onMouseLeave={onMouseLeave}
          id={id}
          key={key}
          src={videoLink}
          isMuted={true}
          isPlaying={true}
          onFullScreenButtonClick={()=> history.push(`${RoutePath.PLAYER}${id}`)}/> :
        <MovieCardPreview
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          MovieCardDetailsItem id={id}
          key={key}
          name={name}
          previewImage={previewImage}/>}
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
