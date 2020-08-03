import React from "react";
import PropTypes from "prop-types";

import "./ProjectInfo.css";

const ProjectInfo = (props) => {
  const { children } = props;
  return (
    <div className={`project-info`}>
      <div className={`project-info__image`}>{children[0]}</div>
      <div className={`project-info__contents`}>{children[1]}</div>
    </div>
  );
};

ProjectInfo.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ProjectInfo;
