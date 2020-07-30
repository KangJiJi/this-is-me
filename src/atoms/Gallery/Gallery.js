import React from "react";
import PropTypes from "prop-types";

import "./Gallery.css";

const Gallery = (props) => {
  const { image, alt, size } = props;
  return (
    <div className={`gallery gallery--${size}`}>
      <img src={image} alt={alt} />
    </div>
  );
};

Gallery.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]),
};

Gallery.defaultProps = {
  size: "medium",
};

export default Gallery;
