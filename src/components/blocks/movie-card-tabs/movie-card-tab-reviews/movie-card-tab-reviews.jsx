import React, {useEffect} from "react";
import Review from "../../review/review";
import {getTwoArraysFromOne} from "../../../../utils/utils";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchReviews} from "../../../../store/movie-data/movie-data-api-actions";

const MovieCardTabReviews = ({isReviewsLoaded, onLoadData, reviews, id}) => {

  const reviewsItems = reviews.length !== 0 ? getTwoArraysFromOne(reviews) : reviews;

  useEffect(() => {
    if (!isReviewsLoaded) {
      onLoadData(id);
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
  id: PropTypes.number,
  isReviewsLoaded: PropTypes.bool,
  onLoadData: PropTypes.func,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  })).isRequired
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  isReviewsLoaded: state.isReviewsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchReviews(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardTabReviews);
