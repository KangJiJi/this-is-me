import React from "react";
import PropTypes from "prop-types";

import "./Logo.css";

const Logo = (props) => {
  const { size } = props;
  return <div className={`logo logo--${size}`}>Kang</div>;
};

Logo.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
};

Logo.defaultProps = {
  size: "medium",
};

export default Logo;
