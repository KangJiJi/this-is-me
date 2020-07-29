import React from "react";
import PropTypes from "prop-types";

import "./ImageListRow.css";

const ImageListRow = (props) => {
  const { children } = props;

  return (
    <div className={`image-list-row`}>
      <div className={`image-list-row__image`}>{children[0]}</div>
      <div className={`image-list-row__string`}>{children[1]}</div>
    </div>
  );
};

ImageListRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ImageListRow;
