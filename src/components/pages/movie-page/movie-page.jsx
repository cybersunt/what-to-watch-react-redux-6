import React, {useEffect} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import Catalog from "../../sections/catalog/catalog";
import PageFooter from "../../sections/page-footer/page-footer";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../blocks/loader/loader";
import {fetchCurrentMovie} from "../../../store/movie-data/movie-data-api-actions";

const MoviePage = ({id}) => {
  const dispatch = useDispatch();
  const isCurrentMovieLoaded = useSelector((state) => state.isCurrentMovieLoaded);
  const currentMovie = useSelector((state) => state.currentMovie);

  const currentMovieGenre = currentMovie.genre;

  useEffect(() => {
    if (!isCurrentMovieLoaded || !currentMovie) {
      dispatch(fetchCurrentMovie(id));
    }
  }, [id, isCurrentMovieLoaded, currentMovie]);

  return isCurrentMovieLoaded ? (
    <MainLayout>
      <MovieCard type="full" currentMovie={currentMovie}/>
      <InnerLayout className={`page-content`}>
        <Catalog currentMovieGenre={currentMovieGenre} className={`catalog--like-this`} title={`More like this`}/>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>) : <div className="movie-card" style={{height: `100vh`, display: `flex`, alignItems: `center`}}><Loader/></div>;
};

MoviePage.propTypes = {...MovieCard.propTypes};

export default MoviePage;
