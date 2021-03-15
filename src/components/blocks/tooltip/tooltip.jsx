import React from "react";
import PropTypes from "prop-types";

const Tooltip = ({children, title, style, onClick}) => {
  return (
    <div className="tooltip" style={style}>
      {children}
      <div className="tooltip-content tooltip-left" onClick={onClick} style={{cursor: `pointer`}}>{title}</div>
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  style: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func
};

export default Tooltip;
