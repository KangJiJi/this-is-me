import React, { useState } from "react";
import PropTypes from "prop-types";

import "./TypographyCirculator.css";

import useInterval from "../../customHooks/useInterval/useInterval";
import Typography from "../../atoms/Typography/Typography";

const TypographyCirculator = (props) => {
  const { stringList, size, color } = props;

  const [currentStringIndex, setCurrentStringIndex] = useState(0);

  const changeStringIndex = () => {
    if (currentStringIndex === stringList.length - 1) setCurrentStringIndex(0);
    else setCurrentStringIndex(currentStringIndex + 1);
  };

  useInterval(changeStringIndex, 2300);

  return (
    <div className={`typography-circulator`}>
      <Typography type={"inlineBlock"} size={size} color={color}>
        {stringList[currentStringIndex]}
      </Typography>
    </div>
  );
};

TypographyCirculator.propTypes = {
  stringList: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.oneOf(["default", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "subPrimary", "black"]),
};

TypographyCirculator.defaultProps = {
  size: "default",
  color: "black",
};

export default TypographyCirculator;
