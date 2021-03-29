import React, {useRef, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {ICON_NAME_PAUSE, ICON_NAME_PLAY} from "../../../constants/constants";
import {getPercent, getVideoDuration} from "../../../utils/utils";
import "./video-player.css";
import classnames from "classnames";

const VideoProgress = ({currentPercent, movieDuration})=> {
  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={currentPercent} max="100"/>
        <div className="player__toggler" style={{left: `${currentPercent}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{movieDuration}</div>
    </div>
  );
};

VideoProgress.propTypes = {currentPercent: PropTypes.number, movieDuration: PropTypes.string};

const VideoPlayer = ({
  id,
  isMuted = false,
  src,
  onButtonExitClick,
  onFullScreenButtonClick,
  onMouseLeave
}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [movieDuration, setMovieDuration] = useState(0);
  const [movieDurationStr, setMovieDurationStr] = useState(``);
  const [currentPercent, setPercent] = useState(0);

  const videoRef = useRef();

  const iconControl = isPlaying ? ICON_NAME_PAUSE : ICON_NAME_PLAY;

  useEffect(()=> {
    const {duration} = videoRef.current;
    if (videoRef.current && !isLoading) {
      setMovieDuration(duration);
      setMovieDurationStr(getVideoDuration(duration));
    }
  }, [videoRef, isLoading]);


  useEffect(() => {
    videoRef.current.oncanplaythrough = () => setIsLoading(false);
    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      const playPromise = videoRef.current.play();

      if (playPromise) {
        playPromise.catch(()=> {});
      }
      return;
    }
    videoRef.current.pause();
  }, [videoRef, isPlaying]);

  const handleTimeUpdate = () => {
    const {currentTime} = videoRef.current;
    if (videoRef.current) {
      setPercent(getPercent(currentTime, movieDuration));
    }
  };

  const handlePlayButtonClick = ()=> setIsPlaying(!isPlaying);

  const handleButtonExitClick = ()=> {
    onButtonExitClick();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={classnames(`player`, {[`video-player`]: isPlaying && isMuted})} onMouseLeave={onMouseLeave}>
      <video
        id={id}
        ref={videoRef}
        src={src}
        className="player__video"
        poster="img/player-poster.jpg"
        onTimeUpdate={handleTimeUpdate}
        muted={isMuted}/>

      {!isMuted && (<button type="button" className="player__exit" onClick={handleButtonExitClick}>Exit</button>)}

      <div className="player__controls">
        <VideoProgress currentPercent={currentPercent} movieDuration={movieDurationStr}/>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            disabled={isLoading}
            onClick={handlePlayButtonClick}>

            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={iconControl}/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>

    </div>
  );
};

VideoPlayer.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string.isRequired,
  isMuted: PropTypes.bool,
  isPlayingVideo: PropTypes.bool,
  onButtonExitClick: PropTypes.func,
  onPlayButtonClick: PropTypes.func,
  onFullScreenButtonClick: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default VideoPlayer;
