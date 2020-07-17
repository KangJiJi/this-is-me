import React from "react";
import PropTypes from "prop-types";

import "./LanguageButton.css";

const LanguageButton = (props) => {
  const { flagImage, isOn, onClick } = props;
  return (
    <button
      className={`language-button language-button--${isOn ? "on" : "off"}`}
      onClick={onClick}
    >
      <img
        className={`language-button__flag-image`}
        src={flagImage}
        alt="flagImage"
      />
    </button>
  );
};

LanguageButton.propTypes = {
  flagImage: PropTypes.string.isRequired,
  isOn: PropTypes.bool,
  onClick: PropTypes.func,
};

LanguageButton.defaultProps = {
  isOn: false,
  onClick: () => {},
};

export default LanguageButton;
