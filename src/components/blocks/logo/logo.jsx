import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {Link} from "react-router-dom";
import {RoutePath} from "../../../constants/constants";
import {useDispatch, useSelector} from "react-redux";
import {resetPromoMovie} from "../../../store/movie-data/movie-data-action";

const LinkWrapper = ({children, activeLink = false, className = null}) => {

  const dispatch = useDispatch();
  const {promoMovie} = useSelector((state) => state.DATA_ITEM);

  const handleClick = () => {
    dispatch(resetPromoMovie());
  };

  return activeLink ?
    (<Link to={RoutePath.ROOT} className={classnames(`logo__link`, className)} onClick={handleClick}>{children}</Link>)
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
