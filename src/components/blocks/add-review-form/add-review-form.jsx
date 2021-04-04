import React, {useState, Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import {addReview} from "../../../store/user-actions/user-actions-api-action";
import {INITIAL_RATING, MAX_LENGTH_COMMENT, MIN_LENGTH_COMMENT, RATING_SIZE} from "../../../constants/constants";

const RatingStars = ({rating, onChange, ratingSize}) => {
  const stars = new Array(ratingSize).fill(1).map((item, index) => index + 1);
  return (
    <div className="rating">
      <div className="rating__stars">
        {stars.map((item) => (
          <Fragment key={item}>
            <input className="rating__input" id={`star-${item}`} type="radio" name="rating" value={item} checked={rating === item} onChange={()=> onChange(item)}/>
            <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequried,
  ratingSize: PropTypes.number.isRequired,
  onChange: PropTypes.func
};

const AddReviewForm = () => {
  const {id} = useParams();

  const [isNewReview, setReview] = useState(``);
  const [messageLength, setMessageLength] = useState(0);
  const [rating, setRating] = useState(INITIAL_RATING);
  const [disabledForm, setDisabledForm] = useState(false);

  const {isCatchError} = useSelector((state) => state.ERROR);
  const {isReviewUploaded} = useSelector((state) => state.USER_ACTIONS);
  const dispatch = useDispatch();

  const disabledSubmit = rating === undefined || isNewReview === `` || messageLength < MIN_LENGTH_COMMENT || messageLength > MAX_LENGTH_COMMENT;

  const handleFieldChange = (evt) => {
    const {value} = evt.target;
    setReview({...isNewReview, value});
    setMessageLength(value.length);
  };

  const handleCheckboxesChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addReview(id, {
      comment: isNewReview.value,
      rating,
    }));
    setDisabledForm(true);
  };

  useEffect(()=> {
    if (!isReviewUploaded && !disabledForm) {
      setDisabledForm(false);
    }

  }, [isReviewUploaded, disabledForm]);

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <RatingStars rating={rating} ratingSize={RATING_SIZE} onChange={handleCheckboxesChange}/>

        {isCatchError ? (<div style={{textAlign: `center`}}>
          <p>Sorry, the data could not be sent.</p>
          <p>Refresh the page and try again.</p>
        </div>) : null}

        <div className="add-review__text">
          <textarea
            disabled={disabledForm}
            minLength={MIN_LENGTH_COMMENT}
            maxLength={MAX_LENGTH_COMMENT}
            onChange={handleFieldChange}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" onClick={handleSubmit} disabled={disabledSubmit}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;
