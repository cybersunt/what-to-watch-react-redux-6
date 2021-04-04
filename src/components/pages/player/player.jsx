import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import VideoPlayer from "../../sections/video-player/video-player";
import MoviesList from "../../blocks/movies-list/movies-list";
import Loader from "../../blocks/loader/loader";
import {useHistory} from "react-router-dom";
import useLoadedMovie from "../../../hooks/use-loaded-movie";
import {useSelector} from "react-redux";

const Player = ({id}) => {
  const history = useHistory();
  const [currentMovie, isCurrentMovieLoaded] = useLoadedMovie(id);
  const {promoMovie, isPromoMovieLoaded} = useSelector((state) => state.DATA_ITEM);
  const videoLink = id === undefined ? promoMovie.videoLink : currentMovie.videoLink;

  return (
    <MainLayout>
      {isCurrentMovieLoaded || isPromoMovieLoaded ? <VideoPlayer
        src={videoLink}
        onButtonExitClick={()=> history.goBack()}/> : <Loader fullscreen/>}
    </MainLayout>
  );
};

Player.propTypes = {...MoviesList.propTypes};

export default Player;
