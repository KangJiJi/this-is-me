import React from "react";
import PropTypes from "prop-types";

import "./Typography.css";

const Typography = (props) => {
  const { size, color, type, children } = props;

  return (
    <p
      className={`typography typography--size--${size} typography--color--${color} typography--type--${type}`}
    >
      {children}
    </p>
  );
};

Typography.propTypes = {
  size: PropTypes.oneOf(["default", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "subPrimary", "black"]),
  type: PropTypes.oneOf(["inline", "block"]),
  children: PropTypes.string.isRequired,
};

Typography.defaultProps = {
  size: "default",
  color: "black",
  type: "block",
};

export default Typography;
