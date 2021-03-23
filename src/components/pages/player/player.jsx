import React, {useEffect, useState} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import VideoPlayer from "../../sections/video-player/video-player";
import {connect} from "react-redux";
import MoviesList from "../../blocks/movies-list/movies-list";
import Loader from "../../blocks/loader/loader";
import {useHistory} from "react-router-dom";
import {fetchCurrentMovie} from "../../../store/movie-data/movie-data-api-actions";

const Player = ({id, isCurrentMovieLoaded, currentMovie, onLoadData}) => {

  const history = useHistory();

  const {videoLink} = currentMovie;
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isCurrentMovieLoaded || !currentMovie) {
      onLoadData(id);
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

const mapStateToProps = (state) => ({
  currentMovie: state.currentMovie,
  isCurrentMovieLoaded: state.isCurrentMovieLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchCurrentMovie(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
