import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import MovieCard from "../../sections/movie-card/movie-card";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import Catalog from "../../sections/catalog/catalog";
import PageFooter from "../../sections/page-footer/page-footer";
import useLoadedMovie from "../../../hooks/use-loaded-movie";
import Loader from "../../blocks/loader/loader";

const MoviePage = ({id}) => {

  const [currentMovie, isCurrentMovieLoaded] = useLoadedMovie(id);
  const currentMovieGenre = currentMovie.genre;

  return (
    <MainLayout>
      {isCurrentMovieLoaded ? <MovieCard type="full" currentMovie={currentMovie}/> : <Loader/>}
      <InnerLayout className={`page-content`}>
        <Catalog currentMovieGenre={currentMovieGenre} className={`catalog--like-this`} title={`More like this`}/>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>
  );
};

MoviePage.propTypes = {...MovieCard.propTypes};

export default MoviePage;
