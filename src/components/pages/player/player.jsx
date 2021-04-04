import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import VideoPlayer from "../../sections/video-player/video-player";
import MoviesList from "../../blocks/movies-list/movies-list";
import Loader from "../../blocks/loader/loader";
import {useHistory} from "react-router-dom";
import {RoutePath} from "../../../constants/constants";
import {useSelector} from "react-redux";
import useLoadedMovie from "../../../hooks/use-loaded-movie";

const Player = ({id}) => {
  const history = useHistory();
  const [currentMovie, isCurrentMovieLoaded] = useLoadedMovie(id);
  const {promoMovie, isPromoMovieLoaded} = useSelector((state) => state.DATA_ITEM);
  const videoLink = id === promoMovie.id ? promoMovie.videoLink : currentMovie.videoLink;
  const videoId = id === promoMovie.id ? promoMovie.id : currentMovie.id;

  const handleButtonExitClick = ()=> {
    return history.action === `PUSH` ?
      history.goBack() :
      history.push(`${RoutePath.FILMS}${videoId}`);
  };

  return (
    <MainLayout>
      {isCurrentMovieLoaded || isPromoMovieLoaded ? <VideoPlayer
        src={videoLink}
        onButtonExitClick={handleButtonExitClick}/> : <Loader />}
    </MainLayout>
  );
};

Player.propTypes = {...MoviesList.propTypes};

export default Player;
