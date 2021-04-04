import React, {useEffect} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import VideoPlayer from "../../sections/video-player/video-player";
import MoviesList from "../../blocks/movies-list/movies-list";
import Loader from "../../blocks/loader/loader";
import {useHistory} from "react-router-dom";
import {PROMO_MOVIE_ID, RoutePath} from "../../../constants/constants";
import {useDispatch, useSelector} from "react-redux";
import {resetCurrentMovie, resetPromoMovie} from "../../../store/movie-data/movie-data-action";
import {fetchCurrentMovie, fetchPromoMovie} from "../../../store/movie-data/movie-data-api-actions";

const Player = ({id}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {promoMovie, isPromoMovieLoaded} = useSelector((state) => state.DATA_ITEM);
  const {currentMovie, isCurrentMovieLoaded} = useSelector((state) => state.DATA_ITEM);
  const videoId = id === undefined ? PROMO_MOVIE_ID : id;
  const actualMovie = videoId === PROMO_MOVIE_ID ? promoMovie : currentMovie;
  const {videoLink} = actualMovie;

  const historyPath = ()=> {
    return history.action === `PUSH` ?
      history.goBack() :
      history.push(`${RoutePath.FILMS}${videoId}`);
  };

  useEffect(() => {
    if (!isPromoMovieLoaded || id === undefined) {
      dispatch(fetchPromoMovie());
    }
    if (!isCurrentMovieLoaded || id !== currentMovie.id) {
      dispatch(fetchCurrentMovie(id));
    }
  }, [id, isCurrentMovieLoaded, isPromoMovieLoaded]);

  const handleButtonExitClick = ()=> {
    dispatch(resetCurrentMovie());
    dispatch(resetPromoMovie());
    historyPath();
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
