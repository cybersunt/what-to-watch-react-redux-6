import React, {useEffect, useState} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import VideoPlayer from "../../sections/video-player/video-player";
import {useDispatch, useSelector} from "react-redux";
import MoviesList from "../../blocks/movies-list/movies-list";
import Loader from "../../blocks/loader/loader";
import {useHistory} from "react-router-dom";
import {fetchCurrentMovie} from "../../../store/movie-data/movie-data-api-actions";

const Player = ({id}) => {
  const history = useHistory();
  const isCurrentMovieLoaded = useSelector((state) => state.isCurrentMovieLoaded);
  const currentMovie = useSelector((state) => state.currentMovie);
  const dispatch = useDispatch();

  const {videoLink} = currentMovie;
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isCurrentMovieLoaded || !currentMovie) {
      dispatch(fetchCurrentMovie(id));
    }
  }, [id, isCurrentMovieLoaded, currentMovie]);

  return isCurrentMovieLoaded ?
    (<MainLayout>
      <VideoPlayer
        src={videoLink}
        isPlaying={isPlaying}
        onPlayButtonClick={() => setIsPlaying(!isPlaying)}
        onButtonExitClick={()=> history.goBack()}/>
    </MainLayout>) : <div className="movie-card" style={{height: `100vh`, display: `flex`, alignItems: `center`}}><Loader/></div>;
};

Player.propTypes = {...MoviesList.propTypes};

export default Player;
