import React, {useRef, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {ICON_NAME_PAUSE, ICON_NAME_PLAY} from "../../../constants/constants";
import {getPersent, getRuntimeInMinutes} from "../../../utils/utils";

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
  const [currentPercentage, setPercentage] = useState(0);

  const videoRef = useRef();

  const iconControl = isPlaying ? ICON_NAME_PAUSE : ICON_NAME_PLAY;

  const style = (isPlaying && isMuted) ? {position: `relative`, width: `280px`, height: `175px`, marginRight: `10px`} : null;

  useEffect(()=> {
    const {duration} = videoRef.current;
    if (videoRef.current) {
      setMovieDuration(duration);
      setMovieDurationStr(getRuntimeInMinutes(duration));
    }
  });


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
      videoRef.current.play();
      return;
    }
    videoRef.current.pause();
  }, [videoRef, isPlaying]);


  const handleTimeUpdate = () => {
    const {currentTime} = videoRef.current;
    if (videoRef.current) {
      setPercentage(getPersent(currentTime, movieDuration));
    }
  };

  const handlePlayButtonClick = ()=> setIsPlaying(!isPlaying);

  return (
    <div className="player" style={style} onMouseLeave={onMouseLeave}>
      <video
        id={id}
        ref={videoRef}
        src={src}
        className="player__video"
        poster="img/player-poster.jpg"
        onTimeUpdate={handleTimeUpdate}
        muted={true}/>

      {isPlaying && !isMuted && (<button type="button" className="player__exit" onClick={onButtonExitClick}>Exit</button>)}

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentPercentage} max="100"></progress>
            <div className="player__toggler" style={{left: `${currentPercentage}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{movieDurationStr}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            disabled={isLoading}
            onClick={handlePlayButtonClick}>

            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={iconControl}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
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
  isPlaying: PropTypes.bool,
  onButtonExitClick: PropTypes.func,
  onPlayButtonClick: PropTypes.func,
  onFullScreenButtonClick: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default VideoPlayer;
