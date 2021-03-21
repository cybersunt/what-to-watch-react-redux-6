import React, {useState, Fragment, useEffect} from "react";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../../constants/auth";
import {useParams} from "react-router-dom";
import {addReview} from "../../../store/api-actions";
import PropTypes from "prop-types";
import {MAX_LENGTH_COMMENT, MIN_LENGTH_COMMENT} from "../../../constants/common";

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

const AddReviewForm = ({isReviewUploaded, onSubmit}) => {


  const {id} = useParams();
  const [isNewReview, setReview] = useState(``);
  const [messageLength, setMessageLength] = useState(0);
  const [rating, setRating] = useState([
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
  ]);
  const [disabledForm, setDisabledForm] = useState(false);

  const userRating = rating.find((el) => el.checked === true);
  const disabledSubmit = userRating === undefined || isNewReview === `` || messageLength < MIN_LENGTH_COMMENT || messageLength > MAX_LENGTH_COMMENT;

  const handleFieldChange = (evt) => {
    const {value} = evt.target;
    setReview({...isNewReview, value});
    setMessageLength(value.length);
  };

  const handleCheckboxesChange = (evt) => {
    const {value} = evt.target;
    const currentValue = Number(value);
    const setValue = rating.find((el) => el.stars === currentValue);
    const oldItem = rating[setValue.id];
    const newItem = {...oldItem, checked: true};
    const newArray = [
      ...rating.slice(0, setValue.id),
      newItem,
      ...rating.slice(setValue.id + 1, 10)
    ];
    setRating(newArray);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(id, {
      comment: isNewReview.value,
      rating: userRating.stars
    });
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

AddReviewForm.propTypes = {
  authorizationStatus: PropTypes.string,
  onSubmit: PropTypes.func,
  isReviewUploaded: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isReviewUploaded: state.isReviewUploaded
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, {comment, rating}) {
    dispatch(addReview(id, {comment, rating}));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
