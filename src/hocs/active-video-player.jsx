import React, {useState, useRef} from 'react';
import MovieCardPreview from "../components/blocks/movies-list/movie-card-preview/movie-card-preview";
import VideoPlayer from "../components/sections/video-player/video-player";
import {RoutePath} from "../constants/routes";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {getUpperCaseStringWithoutSpaces} from "../utils/utils";

const ActiveVideoPlayer = ({videoLink, id, name, previewImage}) => {

  const key = getUpperCaseStringWithoutSpaces(name);

  const history = useHistory();
  const [isHovering, setHovering] = useState(false);
  const previewRef = useRef();

  const onMouseLeave = () => setHovering(false);

  const onMouseEnter = (evt)=> {
    evt.preventDefault();
    if (Number(previewRef.current.id) === id) {
      setHovering(true);
    }
  };

  return (
    <>
      {isHovering ?
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
          ref={previewRef}
          id={id}
          key={key}
          name={name}
          previewImage={previewImage}/>}
    </>
  );
};

ActiveVideoPlayer.propTypes = {
  id: PropTypes.number,
  videoLink: PropTypes.string,
  name: PropTypes.string,
  previewImage: PropTypes.string,
};

export default ActiveVideoPlayer;
