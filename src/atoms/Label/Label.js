import React from "react";
import PropTypes from "prop-types";

import "./Label.css";

const Label = (props) => {
  const { label } = props;

  return (
    <div className={`label`}>
      <div>{label}</div>
    </div>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Label;
