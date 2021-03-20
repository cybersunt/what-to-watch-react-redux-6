import React, {useState, Fragment} from "react";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../../constants/auth";
import {useParams} from "react-router-dom";
import {addReview} from "../../../store/api-actions";

const RatingStars = ({rating, onChange}) => {
  return (
    <div className="rating">
      <div className="rating__stars">
        {
          rating.map(({stars, checked}) => (
            <Fragment key={stars}>
              <input className="rating__input" id={`star-${stars}`} type="radio" name="rating" value={stars} checked={checked} onChange={onChange}/>
              <label className="rating__label" htmlFor={`star-${stars}`}>Rating {stars}</label>
            </Fragment>
          ))
        }
      </div>
    </div>
  );
};

const AddReviewForm = ({authorizationStatus, onSubmit}) => {
  const {id} = useParams();
  const [isNewReview, setReview] = useState(``);
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
  const userRating = rating.find((el) => el.checked === true);

  const handleFieldChange = (evt) => {
    const {value} = evt.target;
    setReview({...isNewReview, value});
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
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <RatingStars rating={rating} onChange={handleCheckboxesChange}/>

        <div className="add-review__text">
          <textarea onChange={handleFieldChange}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            minLength={50}
            maxLength={400}/>
          {/* FIXME: по техническому заданию неавторизованный пользователь вообще не попадает на эту страницу. Это условие точно нужно?*/}
          {authorizationStatus === AuthorizationStatus.AUTH ?
            (<div className="add-review__submit">
              <button className="add-review__btn" type="submit" onClick={handleSubmit}>Post</button>
            </div>) : null}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, {comment, rating}) {
    dispatch(addReview(id, {comment, rating}));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
