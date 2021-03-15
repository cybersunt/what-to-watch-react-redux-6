import MovieCardTabReviews from "../components/blocks/movie-card-tabs/movie-card-tab-reviews/movie-card-tab-reviews";
import MovieCardTabOverview from "../components/blocks/movie-card-tabs/movie-card-tab-overview/movie-card-tab-overview";
import MovieCardTabDetails from "../components/blocks/movie-card-tabs/movie-card-tab-details/movie-card-tab-details";

export const TabsItems = [
  {id: 1, name: `Overview`, component: MovieCardTabOverview},
  {id: 2, name: `Details`, component: MovieCardTabDetails},
  {id: 3, name: `Reviews`, component: MovieCardTabReviews}
];


