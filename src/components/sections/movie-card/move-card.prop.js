import PropTypes from 'prop-types';
import MovieCardInfo from "../../blocks/movie-card-info/movie-card-info";
import MovieCardTabContent from "../../../hocs/movie-card-tab-content";

const movieCardPropTypes = {
  ...MovieCardInfo.propTypes,
  ...MovieCardTabContent.propTypes,
  posterImage: PropTypes.string,
  previewImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  runTime: PropTypes.number,
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  videoLink: PropTypes.string,
  previewVideoLink: PropTypes.string
};

export default movieCardPropTypes;
