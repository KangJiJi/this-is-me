import React from "react";
import PropTypes from "prop-types";

import "./ProjectInfoContents.css";

const ProjectInfoContents = (props) => {
  const { children } = props;

  return (
    <div className={`project-info-contents`}>
      <div className={`project-info-contents__label`}>{children[0]}</div>
      <div className={`project-info-contents__contents`}>{children[1]}</div>
    </div>
  );
};

ProjectInfoContents.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ProjectInfoContents;
