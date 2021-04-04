import React from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {resetCurrentMovie, resetPromoMovie} from "../../../store/movie-data/movie-data-action";

const Link = ({className, pathName, children})=> {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(resetCurrentMovie());
    dispatch(resetPromoMovie());
    history.push(pathName);
  };

  return (
    <a href="#" className={className} onClick={handleClick}>{children}</a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  pathName: PropTypes.string,
  children: PropTypes.string
};

export default Link;
