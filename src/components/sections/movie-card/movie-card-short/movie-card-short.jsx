import React from "react";
import PageHeader from "../../page-header/page-header";
import MovieCardInfo from "../../../blocks/movie-card-info/movie-card-info";
import MovieCardPoster from "../../../blocks/movie-card-poster/movie-card-poster";
import movieCardPropTypes from "../move-card.prop";

const MovieCardShort = (currentMovie) => {

  const {name, posterImage, backgroundImage, genre, released} = currentMovie

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader className={`movie-card__head`} activeLink={true}/>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <MovieCardPoster name={name} posterImage={posterImage}/>
          <MovieCardInfo name={name} genre={genre} released={released}/>
        </div>
      </div>
    </section>
  );
};

MovieCardShort.propTypes = {...movieCardPropTypes};

export default MovieCardShort;
