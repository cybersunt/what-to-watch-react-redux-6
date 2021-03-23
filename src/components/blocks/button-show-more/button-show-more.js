import React from "react";
import PropTypes from "prop-types";

const ButtonShowMore = ({onClick}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
    </div>
  );
};

ButtonShowMore.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ButtonShowMore;
