import React, {useState, Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import {MAX_LENGTH_COMMENT, MIN_LENGTH_COMMENT} from "../../../constants/common";
import {addReview} from "../../../store/user-actions/user-actions-api-action";

const ratingStars = [
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

const RatingStars = ({rating, onChange}) => {
  return (
    <div className="rating">
      <div className="rating__stars">
        {rating.map(({stars, checked}) => (
          <Fragment key={stars}>
            <input className="rating__input" id={`star-${stars}`} type="radio" name="rating" value={stars} checked={checked} onChange={onChange}/>
            <label className="rating__label" htmlFor={`star-${stars}`}>Rating {stars}</label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    stars: PropTypes.number,
    checked: PropTypes.bool
  })),
  onChange: PropTypes.func
};

const AddReviewForm = () => {
  const {id} = useParams();

  const [isNewReview, setReview] = useState(``);
  const [messageLength, setMessageLength] = useState(0);
  const [rating, setRating] = useState(ratingStars);
  const [disabledForm, setDisabledForm] = useState(false);

  const {isCatchError} = useSelector((state) => state.ERROR);
  const {isReviewUploaded} = useSelector((state) => state.USER_ACTIONS);
  const dispatch = useDispatch();

  const userRating = rating.find((el) => el.checked === true);
  const disabledSubmit = userRating === undefined || isNewReview === `` || messageLength < MIN_LENGTH_COMMENT || messageLength > MAX_LENGTH_COMMENT;

  const selectedStars = (value) => {
    const currentValue = Number(value);
    const setValue = rating.find((el) => el.stars === currentValue);
    const oldItem = rating[setValue.id];
    const newItem = {...oldItem, checked: true};
    const newArray = [
      ...rating.slice(0, setValue.id),
      newItem,
      ...rating.slice(setValue.id + 1, rating.length)
    ];
    return newArray;
  };

  const handleFieldChange = (evt) => {
    const {value} = evt.target;
    setReview({...isNewReview, value});
    setMessageLength(value.length);
  };

  const handleCheckboxesChange = (evt) => {
    const {value} = evt.target;
    const newData = selectedStars(value);
    setRating(newData);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addReview(id, {
      comment: isNewReview.value,
      rating: userRating.stars
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
        <RatingStars rating={rating} onChange={handleCheckboxesChange}/>

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
