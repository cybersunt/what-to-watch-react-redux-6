import React from "react";
import {reviewsItems} from "../../../../mocks/reviews";
import Review from "../../review/review";
import {getTwoArraysFromOne} from "../../../../utils/utils";

const reviews = getTwoArraysFromOne(reviewsItems);

const MovieCardTabReviews = () => {

  return (
    <>
      {reviews.map((item, index) => {
        return (
          <div key={index} className="movie-card__reviews-col">
            {item.map(({id, user, rating, comment})=> <Review key={id} user={user} rating={rating} comment={comment}/>)}
          </div>
        );
      })}
    </>
  );
};

export default MovieCardTabReviews;
