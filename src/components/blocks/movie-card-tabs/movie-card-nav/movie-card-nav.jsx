import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import {TabsKeys} from "../../../../constants/constants";

const MovieCardNavItem = ({activeKey, id, title, onClick}) => {
  return (
    <li className={classnames(`movie-nav__item`, {[`movie-nav__item--active`]: activeKey === id})}>
      <a id={id} href="#" className="movie-nav__link" onClick={onClick}>{title}</a>
    </li>
  );
};

MovieCardNavItem.propTypes = {
  activeKey: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  onClick: PropTypes.func
};

export const MovieCardNav = ({items, activeKey, defaultActiveKey = TabsKeys.FIRST, onClick})=> {

  const isActiveKey = activeKey ? activeKey : defaultActiveKey;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {items.map(({id, name}) => <MovieCardNavItem activeKey={isActiveKey} key={id} id={id} title={name} onClick={onClick}/>)}
      </ul>
    </nav>
  );
};

MovieCardNav.propTypes = {
  activeKey: PropTypes.number.isRequired,
  defaultActiveKey: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({...MovieCardNavItem.propTypes})).isRequired,
  onClick: PropTypes.func.isRequired
};

export default MovieCardNav;
