import React from "react";
import PropTypes from "prop-types";
import {TabsKeys} from "../constants/constants";

const MovieCardTabContent = ({Component, tabKey, activeKey, ...props}) => {

  const style = activeKey !== tabKey ? {display: `none`} : null;

  const getTabContainer = () => {
    switch (tabKey) {
      case TabsKeys.FIRST:
        return <div id={tabKey} style={style}><Component {...props}/></div>;
      case TabsKeys.SECOND:
        return <div id={tabKey} className="movie-card__text movie-card__row" style={style}><Component {...props}/></div>;
      case TabsKeys.THIRD:
        return <div id={tabKey} className="movie-card__reviews movie-card__row" style={style}><Component {...props}/></div>;
      default:
        return <div id={0}><Component {...props}/></div>;
    }
  };

  return getTabContainer(tabKey);
};

MovieCardTabContent.propTypes = {
  tabKey: PropTypes.number,
  activeKey: PropTypes.number,
  component: PropTypes.node
};

export default MovieCardTabContent;
