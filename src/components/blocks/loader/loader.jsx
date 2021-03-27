import React from 'react';
import './loader.css';
import PropTypes from "prop-types";
import classnames from "classnames";

const Loader = ({container = true, fullscreen = false, className}) => {
  return container ?
    (<div className={classnames(`loader-wrapper`, {[`loader-wrapper-fullscreen`]: fullscreen})}>
      <div className={classnames(`loader`, className)}>Loading...</div>
    </div>) : <div className={classnames(`loader`, className)}>Loading...</div>;
};

Loader.propTypes = {
  container: PropTypes.bool,
  fullscreen: PropTypes.bool,
  className: PropTypes.string
};

export default Loader;
