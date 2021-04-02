import moment from "moment";
import {
  COUNT_COL,
  DEFAULT_MOVIE_GENRE,
  HUNDRED,
  MovieNameRating,
  ONE_HOUR, ONE_HOUR_MINUTES, ONE_HOUR_SECONDS,
  ONE_MINUTE, ONE_MINUTE_SECONDS,
  ONE_SECOND,
} from "../constants/constants";

export const getMovieRatingText = (rating) => {
  switch (true) {
    case rating <= 3:
      return MovieNameRating.BAD;
    case (rating > 3 && rating <= 5):
      return MovieNameRating.NORMAL;
    case (rating > 5 && rating <= 8):
      return MovieNameRating.GOOD;
    case (rating > 8 && rating < 10):
      return MovieNameRating.VERY_GOOD;
    case (rating === 10):
      return MovieNameRating.AWESOME;
    default:
      return MovieNameRating.EMPTY_DATA;
  }
};

export const getRuntimeInHours = (runtime) => {
  const hours = Math.floor(runtime / ONE_HOUR);
  const minutes = runtime % ONE_HOUR;

  return [hours, minutes];
};

export const getSecondsForTimer = (seconds) => seconds < 10 ? `0${seconds}` : seconds;

export const getVideoTimer = (runtime) => {
  const runTimeSeconds = runtime / ONE_SECOND;

  if (runTimeSeconds >= ONE_HOUR_SECONDS) {
    const hours = Math.floor(runTimeSeconds / ONE_HOUR_SECONDS);
    const minutes = Math.floor((runTimeSeconds - ONE_HOUR_SECONDS) / ONE_HOUR_MINUTES);
    const seconds = runTimeSeconds - (ONE_HOUR_SECONDS + minutes * ONE_MINUTE_SECONDS);

    return `${hours}:${minutes}:${getSecondsForTimer(seconds)}`;

  } else {
    const minutes = Math.floor(runtime / ONE_MINUTE);
    const seconds = Math.floor(runtime % ONE_MINUTE);

    return `${minutes}:${getSecondsForTimer(seconds)}`;
  }
};

export const getPercent = (part, whole) => part * HUNDRED / whole;

export const getStringFromArray = (array, sign) => {
  return array.join(`${sign} `);
};

export const getTwoArraysFromOne = (array) => {
  const lengthLeftCol = Math.round(array.length / COUNT_COL);

  const arrayLeft = array.slice(0, lengthLeftCol);
  const arrayRight = array.slice(lengthLeftCol, array.length);

  return [arrayLeft, arrayRight];
};

export const getStringRatingMovie = (rating) => rating.toString().replace(/\./g, `,`);

export const getUpperCaseStringWithoutSpaces = (string) => string.toLowerCase().replace(/\ /g, `-`);

export const getCommentDate = (date) => moment(date).format(`MMMM DD, YYYY`);

export const getCommentDateTime = (date) => moment(date).format(`YYYY-MM-DD`);

export const getGenresItems = (movies) => {
  if (movies.length === 0) {
    return 0;
  }
  const genresList = movies.map((element) => element.genre).flat();
  const genreSet = new Set(genresList);
  const genresArray = Array.from(genreSet);
  genresArray.unshift(DEFAULT_MOVIE_GENRE);

  return genresArray;
};

export const transformMovie = (movie) => {
  const adaptedMovie = ({
    ...movie,
    posterImage: movie.poster_image,
    previewImage: movie.preview_image,
    backgroundImage: movie.background_image,
    backgroundColor: movie.background_color,
    runTime: movie.run_time,
    scoresCount: movie.scores_count,
    isFavorite: movie.is_favorite,
    videoLink: movie.video_link,
    previewVideoLink: movie.preview_video_link
  });

  delete adaptedMovie.poster_image;
  delete adaptedMovie.preview_image;
  delete adaptedMovie.background_image;
  delete adaptedMovie.background_color;
  delete adaptedMovie.run_time;
  delete adaptedMovie.scores_count;
  delete adaptedMovie.is_favorite;
  delete adaptedMovie.video_link;
  delete adaptedMovie.preview_video_link;

  return adaptedMovie;
};

export const transformUserData = (authInfo) => {
  const adaptedUserData = ({
    ...authInfo,
    avatarUrl: authInfo.avatar_url
  });

  delete adaptedUserData.avatar_url;

  return adaptedUserData;
};

