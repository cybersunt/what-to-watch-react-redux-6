import React from "react";
import PropTypes from "prop-types";
import './tooltip.css';
import classnames from "classnames";

const Tooltip = ({children, title, className, onClick}) => {
  return (
    <div className={classnames(`tooltip`, className)}>
      {children}
      <div className="tooltip-content tooltip-left" onClick={onClick}>{title}</div>
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Tooltip;
