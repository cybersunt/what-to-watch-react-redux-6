import React from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

const Link = ({className, pathName, children})=> {
  const history = useHistory();

  const handleClick = (evt) => {
    evt.preventDefault();
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
