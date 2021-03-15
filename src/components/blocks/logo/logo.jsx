import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {Link} from "react-router-dom";
import {RoutePath} from "../../../constants/routes";

const LinkWrapper = ({children, activeLink = false, className = null}) => {
  return activeLink ?
    (<Link to={RoutePath.ROOT} className={classnames(`logo__link`, className)}>{children}</Link>)
    : (<a className={classnames(`logo__link`, className)}>{children}</a>);
};

LinkWrapper.propTypes = {
  className: PropTypes.string,
  activeLink: PropTypes.bool,
  children: PropTypes.node.isRequired
};

const Logo = ({activeLink, className}) => {
  return (
    <div className="logo">
      <LinkWrapper activeLink={activeLink} className={className}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </LinkWrapper>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  activeLink: PropTypes.bool
};

export default Logo;
