import React from "react";
import PropTypes from "prop-types";

import "./Avatar.css";

const Avatar = (props) => {
  const { avatarImage, size } = props;
  return (
    <div className={`avatar avatar--${size}`}>
      <img
        className={`avatar__avatar-image`}
        src={avatarImage}
        alt="avatarImage"
      />
    </div>
  );
};

Avatar.propTypes = {
  avatarImage: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Avatar.defaultProps = {
  size: "medium",
};

export default Avatar;
