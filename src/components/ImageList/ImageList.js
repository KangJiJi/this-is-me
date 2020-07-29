import React from "react";
import PropTypes from "prop-types";

const ImageList = (props) => {
  const { children } = props;

  return <>{children}</>;
};

ImageList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ImageList;
