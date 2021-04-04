import React, {useRef, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {ICON_NAME_PAUSE, ICON_NAME_PLAY} from "../../../constants/constants";
import {getPercent, getVideoTimer} from "../../../utils/utils";
import "./video-player.css";
import classnames from "classnames";

const VideoProgress = ({currentPercent, timeLeft})=> {
  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={currentPercent} max="100"/>
        <div className="player__toggler" style={{left: `${currentPercent}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{timeLeft}</div>
    </div>
  );
};

VideoProgress.propTypes = {currentPercent: PropTypes.number, timeLeft: PropTypes.string};

const VideoPlayer = ({
  id,
  isMuted = false,
  src,
  previewImage,
  onButtonExitClick,
  onMouseLeave
}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [movieDuration, setMovieDuration] = useState(0);
  const [timeLeft, setTimeLeft] = useState(``);
  const [currentPercent, setPercent] = useState(0);

  const videoRef = useRef();

  const iconControl = isPlaying ? ICON_NAME_PAUSE : ICON_NAME_PLAY;

  const previewMode = !isMuted;

  useEffect(()=> {
    const {duration} = videoRef.current;
    if (videoRef.current && !isLoading) {
      setMovieDuration(duration);
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
  }, [src, videoRef]);

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      const playPromise = videoRef.current.play();

      if (playPromise) {
        playPromise.catch(()=> setIsPlaying(false));
      }
      return;
    }
    videoRef.current.pause();
  }, [videoRef, isPlaying]);

  const handleTimeUpdate = () => {
    const {currentTime} = videoRef.current;
    if (videoRef.current) {
      setPercent(getPercent(currentTime, movieDuration));
      setTimeLeft(getVideoTimer(movieDuration - currentTime));
    }
  };

  const handlePlayButtonClick = ()=> setIsPlaying(!isPlaying);

  const handleFullScreenButtonClick = ()=> {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
      const fullScreenPromise = videoRef.current.requestFullscreen();

      if (fullScreenPromise) {
        fullScreenPromise.catch(()=> {});
      }
    }
  };

  return (
    <div className={classnames(`player`, {[`video-player`]: !previewMode})} onMouseLeave={onMouseLeave}>
      <video
        id={id}
        ref={videoRef}
        src={src}
        className="player__video"
        poster={previewImage}
        onTimeUpdate={handleTimeUpdate}
        muted={isMuted}/>

      {previewMode && (
        <>
          <button type="button" className="player__exit" onClick={onButtonExitClick}>Exit</button>
          <div className="player__controls">
            <VideoProgress currentPercent={currentPercent} timeLeft={timeLeft}/>

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

              <button type="button" className="player__full-screen" onClick={handleFullScreenButtonClick}>
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"/>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

VideoPlayer.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string.isRequired,
  previewImage: PropTypes.string,
  isMuted: PropTypes.bool,
  isPlayingVideo: PropTypes.bool,
  onButtonExitClick: PropTypes.func,
  onPlayButtonClick: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default VideoPlayer;
