import React from "react";
import PropTypes from "prop-types";

import "./InfoBox.css";

const InfoBox = (props) => {
  const { label, contentsList } = props;

  return (
    <div className={`info-box`}>
      <div className={`info-box__label`}>{label}</div>
      {contentsList.map((contents) => {
        return (
          <div className={`info-box__contents`} key={contents}>
            <span className={`info-box__contents-marker`}></span>
            <span className={`info-box__contents-val`}>{contents}</span>
          </div>
        );
      })}
    </div>
  );
};

InfoBox.propTypes = {
  label: PropTypes.string.isRequired,
  contentsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InfoBox;
