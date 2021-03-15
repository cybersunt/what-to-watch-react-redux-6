import React, {useState} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import VideoPlayer from "../../sections/video-player/video-player";
import {useHistory} from "react-router-dom";
import useMovie from "../../../hooks/use-movie";
import {connect} from "react-redux";
import MoviesList from "../../blocks/movies-list/movies-list";

const Player = ({movies}) => {
  const history = useHistory();

  const currentMovie = useMovie(movies);
  const {videoLink} = currentMovie;
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <MainLayout>
      <VideoPlayer
        src={videoLink}
        isPlaying={isPlaying}
        onPlayButtonClick={() => setIsPlaying(!isPlaying)}
        onButtonExitClick={()=> history.goBack()}/>
    </MainLayout>
  );
};

Player.propTypes = {...MoviesList.propTypes};

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Player);
