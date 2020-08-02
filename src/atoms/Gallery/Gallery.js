import React from "react";
import PropTypes from "prop-types";

import "./Gallery.css";

const Gallery = (props) => {
  const { image, alt, size, responsive } = props;
  return (
    <div className={`gallery gallery--${responsive ? `responsive` : size}`}>
      <img src={image} alt={alt} />
    </div>
  );
};

Gallery.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  responsive: PropTypes.bool,
};

Gallery.defaultProps = {
  size: "medium",
  responsive: false,
};

export default Gallery;
