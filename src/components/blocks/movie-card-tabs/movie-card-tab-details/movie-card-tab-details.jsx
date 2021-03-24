import React from "react";
import PropTypes from "prop-types";
import {getRuntimeInHours, getStringFromArray} from "../../../../utils/utils";
import movieCardTabPropTypes from "../move-card-tab.prop";

const MovieCardTextCol = ({children}) => <div className="movie-card__text-col">{children}</div>;

MovieCardTextCol.propTypes = {children: PropTypes.node.isRequired};

const MovieCardDetailsItem = ({label, value}) => {

  return (
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">{label}</strong>
      <span className="movie-card__details-value">{value}</span>
    </p>
  );
};

MovieCardDetailsItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]).isRequired
};

const MovieCardTabDetails = ({runTime, genre, released, director, starring}) => {

  const [hours, minutes] = getRuntimeInHours(runTime);

  const cast = starring.map((item, index, array) => (<React.Fragment key={index}>{item}{index < array.length - 1 ? <br/> : null}</React.Fragment>));

  return (
    <>
      <MovieCardTextCol>
        <MovieCardDetailsItem label="Director" value={director}/>

        <MovieCardDetailsItem label="Starring" value={cast}/>
      </MovieCardTextCol>

      <MovieCardTextCol>
        <MovieCardDetailsItem label="Run Time" value={`${hours}h ${minutes}m`}/>
        <MovieCardDetailsItem label="Genre" value={genre}/>
        <MovieCardDetailsItem label="Released" value={released}/>
      </MovieCardTextCol>
    </>
  );
};

MovieCardTabDetails.propTypes = {...movieCardTabPropTypes};

export default MovieCardTabDetails;
