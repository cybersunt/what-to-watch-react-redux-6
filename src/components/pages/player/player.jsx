import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import VideoPlayer from "../../sections/video-player/video-player";
import MoviesList from "../../blocks/movies-list/movies-list";
import Loader from "../../blocks/loader/loader";
import {useHistory} from "react-router-dom";
import useLoadedMovie from "../../../hooks/use-loaded-movie";

const Player = ({id}) => {
  const history = useHistory();
  const [currentMovie, isCurrentMovieLoaded] = useLoadedMovie(id);
  const {videoLink} = currentMovie;
  
  return (
    <MainLayout>
      {isCurrentMovieLoaded ? <VideoPlayer
        src={videoLink}
        onButtonExitClick={()=> history.goBack()}/> : <Loader fullscreen/>}
    </MainLayout>
  );
};

Player.propTypes = {...MoviesList.propTypes};

export default Player;
