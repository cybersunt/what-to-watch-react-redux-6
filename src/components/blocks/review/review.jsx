import React from "react";
import {getCommentDate, getCommentDateTime, getStringRatingMovie} from "../../../utils/utils";
import PropTypes from "prop-types";

const Review = ({user, comment, date, rating}) => {

  const {name} = user;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={getCommentDateTime(date)}>{getCommentDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{getStringRatingMovie(rating)}</div>
    </div>
  );
};

Review.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }),
  comment: PropTypes.string,
  date: PropTypes.number,
  rating: PropTypes.number
};

export default Review;
