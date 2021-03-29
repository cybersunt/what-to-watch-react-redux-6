import MovieCardTabReviews from "../components/blocks/movie-card-tabs/movie-card-tab-reviews/movie-card-tab-reviews";
import MovieCardTabOverview from "../components/blocks/movie-card-tabs/movie-card-tab-overview/movie-card-tab-overview";
import MovieCardTabDetails from "../components/blocks/movie-card-tabs/movie-card-tab-details/movie-card-tab-details";

export const HUNDRED = 100;
export const ONE_HOUR = 60;
export const ONE_MINUTE = 60;
export const ONE_SECOND = 1000; // milliseconds
export const ONE_HOUR_SECONDS = 3600;
export const ONE_HOUR_MINUTES = 60;
export const ONE_MINUTE_SECONDS = 60;

export const COUNT_COL = 2;

export const MOVIES_COUNT_PER_STEP = 8;
export const MAX_DISPLAY_COUNT_GENRES = 10;
export const MAX_SIMILAR_MOVIES = 4;

export const MIN_LENGTH_COMMENT = 50;
export const MAX_LENGTH_COMMENT = 400;
export const MAX_ID_FILM = 25;

export const TIMEOUT_MSEC = 1000;

export const STATUS_ADD_MOVIE = 1;

export const DEFAULT_MOVIE_GENRE = `All genres`;
export const DEFAULT_CATALOG_TITLE = `Catalog`;

export const ICON_NAME_PAUSE = `#pause`;
export const ICON_NAME_PLAY = `#play-s`;

export const EMAIL_VALID = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const starsArray = [
  {id: 0, stars: 1, checked: false},
  {id: 1, stars: 2, checked: false},
  {id: 2, stars: 3, checked: false},
  {id: 3, stars: 4, checked: false},
  {id: 4, stars: 5, checked: false},
  {id: 5, stars: 6, checked: false},
  {id: 6, stars: 7, checked: false},
  {id: 7, stars: 8, checked: false},
  {id: 8, stars: 9, checked: false},
  {id: 9, stars: 10, checked: false}
];

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const RoutePath = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  PLAYER: `/player/`,
  PLAYER_ID: `/player/:id`,
  FILMS: `/films/`,
  FILM_ID: `/films/:id`,
  FILM_REVIEW: `/films/:id/review`
};

export const APIRoute = {
  LOGIN: `/login`,
  LOG_OUT: `/logout`,
  FILMS: `/films`,
  FILM_ID: `/films/:id`,
  PROMO_FILM: `/films/promo`,
  COMMENTS: `/comments`,
  MY_LIST: `/favorite`
};

export const MovieCardTypes = {
  FULL: `full`,
  SHORT: `short`,
  REVIEW: `review`
};

export const MovieNameRating = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
  EMPTY_DATA: `Empty data`
};

export const TabsItems = [
  {id: 1, name: `Overview`, component: MovieCardTabOverview},
  {id: 2, name: `Details`, component: MovieCardTabDetails},
  {id: 3, name: `Reviews`, component: MovieCardTabReviews}
];

export const TabsKeys = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3
};
