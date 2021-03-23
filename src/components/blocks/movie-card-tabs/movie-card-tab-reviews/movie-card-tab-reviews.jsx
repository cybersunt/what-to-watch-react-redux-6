import React, {useEffect} from "react";
import Review from "../../review/review";
import {getTwoArraysFromOne} from "../../../../utils/utils";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";
import {fetchReviews} from "../../../../store/movie-data/movie-data-api-actions";

const MovieCardTabReviews = ({id}) => {

  const {reviews, isReviewsLoaded} = useSelector((state) => state.DATA_ITEM);
  const dispatch = useDispatch();

  const reviewsItems = reviews.length !== 0 ? getTwoArraysFromOne(reviews) : reviews;

  useEffect(() => {
    if (!isReviewsLoaded) {
      dispatch(fetchReviews(id));
    }
  }, [isReviewsLoaded]);

  const reviewsList = reviewsItems.length !== 0 ? reviewsItems.map((item, index) => (
    <div key={index} className="movie-card__reviews-col">
      {item.map(({date, user, rating, comment})=> <Review key={date} user={user} rating={rating} comment={comment}/>)}
    </div>)
  ) : <div>Your review will be the first</div>;

  return (<>{reviewsList}</>);
};

MovieCardTabReviews.propTypes = {
  id: PropTypes.number
};

export default MovieCardTabReviews;
