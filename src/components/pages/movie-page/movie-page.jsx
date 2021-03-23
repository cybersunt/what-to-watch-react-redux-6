import React, {useEffect} from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import Catalog from "../../sections/catalog/catalog";
import PageFooter from "../../sections/page-footer/page-footer";
import Loader from "../../blocks/loader/loader";
import useLoadedMovie from "../../../hooks/use-loaded-movie";

const MoviePage = ({id}) => {

  const [currentMovie, isCurrentMovieLoaded] = useLoadedMovie(id);
  const currentMovieGenre = currentMovie.genre;

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
